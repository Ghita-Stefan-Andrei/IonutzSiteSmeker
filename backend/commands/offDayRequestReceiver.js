const fs = require('fs');
const { generateDateRange } = require('../getDatesArray');

function offDayRequestReceiver(req, res){
    const { ID, requestID, startDate, endDate, differenceInDays, selectedOption, mailReplacer, telefonUrgenta } = req.body;

    if (!ID || !startDate || !endDate || !selectedOption || !mailReplacer || !telefonUrgenta || !requestID) {
        return res.status(400).send('Datele trimise sunt incomplete!');
    }

    const dateRange = generateDateRange(startDate, endDate);
    const status = "pending";

    const responseJson = {
        requestID,
        startDate,
        endDate,
        differenceInDays,
        selectedOption,
        mailReplacer,
        telefonUrgenta,
        dateRange,
        status
    };

    let NAME = "";
    fs.readFile('./db/userData.json', 'utf8', (err, userData) => {
        if (err) {
            console.error('Eroare la citirea fișierului:', err);
            return res.status(500).send('Eroare server!');
        }
        const userDataParsed = JSON.parse(userData);
        const user = userDataParsed.users.find(u => u.id === ID);
        NAME = user.name;
    });

    fs.readFile('./db/offDaysQueue.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Eroare la citirea fișierului:', err);
            return res.status(500).send('Eroare server!');
        }

        const jsonData = JSON.parse(data);

        const userRequest = jsonData.requests.find(request => request.id === ID);

        if (userRequest) {
            userRequest.req.push(responseJson);
        } else {
            jsonData.requests.push({
                id: ID,
                name: NAME,
                req: [responseJson]
            });
        }

        fs.writeFile('./db/offDaysQueue.json', JSON.stringify(jsonData, null, 4), 'utf8', (writeErr) => {
            if (writeErr) {
                console.error('Eroare la scrierea fișierului:', writeErr);
                return res.status(500).send('Eroare server!');
            }

            console.log('Cererea a fost adăugată cu succes!');
        });
    });

    res.send('Cererea a fost primită cu succes!');
}

module.exports = { offDayRequestReceiver };