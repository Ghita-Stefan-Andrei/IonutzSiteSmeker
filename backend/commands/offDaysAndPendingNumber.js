const fs = require('fs');

function offDaysAndPendingNumber(req, res){
    const userId = req.query.id;

    console.log('Cerere concediu');

    fs.readFile('./db/userData.json', 'utf8', (err, userData) => {
        if (err) {
            console.error('Eroare la citirea fișierului userData.json:', err);
            return res.status(500).send('Eroare server!');
        }

        const userDataParsed = JSON.parse(userData);
        const user = userDataParsed.users.find(u => u.id === userId);

        if (!user) {
            return res.status(404).send('Utilizatorul nu a fost găsit!');
        }

        fs.readFile('./db/offDaysQueue.json', 'utf8', (err, requestsData) => {
            if (err) {
                console.error('Eroare la citirea fișierului offDaysQueue.json:', err);
                return res.status(500).send('Eroare server!');
            }

            const requestsParsed = JSON.parse(requestsData);

            const userRequests = requestsParsed.requests.find(request => request.id === userId);

            const requestsCount = userRequests 
            ? userRequests.req.filter(request => request.status === 'pending').length 
            : 0;

            res.json({
                offDays: user.offDays || [],
                requestsCount: requestsCount
            });
        });
    });
}

module.exports = { offDaysAndPendingNumber };