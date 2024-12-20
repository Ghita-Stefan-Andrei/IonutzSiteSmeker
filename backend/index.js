const express = require('express');
const cors = require('cors'); 
const fs = require('fs');
const { getFlyerCopy } = require('./flyer');
const { getTable } = require('./calendar');
const { generateDateRange } = require('./getDatesArray');

const app = express();

app.use(cors());

app.get('/api/data', (req, res) => {
    console.log("FluturasPage")
    fs.readFile('./db/fluturas.json', 'utf8', (err, jsonData) => {
        if (err) {
            console.error('Eroare la citirea fișierului JSON:', err);
            res.status(500).send('Eroare server!');
        } else {
            const data = JSON.parse(jsonData); 
            res.json(data); 
        }
    });
});

app.get('/api/user-info', (req, res) => {
    const userId = req.query.id; 

    fs.readFile('./db/userData.json', 'utf8', (err, jsonData) => {
        if (err) {
            console.error('Eroare la citirea fișierului JSON:', err);
            res.status(500).send('Eroare server!');
            return;
        }

        try {
            const data = JSON.parse(jsonData);

            const user = data.users.find(u => u.id === userId);
            console.log(`${userId}: ${user.name} connected`)

            if (!user) {
                res.status(404).send('Utilizatorul nu a fost găsit!');
                return;
            }

            res.json({
                name: user.name,
                email: user.email,
                manager: user.manager,
                team: user.team
            });
        } catch (parseError) {
            console.error('Eroare la parsarea JSON-ului:', parseError);
            res.status(500).send('Eroare server!');
        }
    });
});

app.get('/api/get-timesheet-data', async (req, res) => {
    console.log("Gathering Timesheets");
    const { id, month } = req.query;

    if (!id || !month) {
        return res.status(400).send('ID-ul utilizatorului este necesar!');
    }
    try {
        const jsonData = await fs.promises.readFile('./db/userData.json', 'utf8');
        const data = JSON.parse(jsonData);

        const user = data.users.find(u => u.id === id);

        if (!user) {
            return res.status(404).send('Utilizatorul nu a fost găsit!');
        }

        const payCheck = user.payChecks.find(pay => pay.month === month);

        if (!payCheck) {
            return res.status(404).send('Paycheck-ul pentru luna specificată nu a fost găsit!');
        }

        res.json({
            workedR: payCheck.workedR,
            workedO: payCheck.workedO,
            leave: payCheck.leave
        });

    } catch (error) {
    console.error('Eroare la generarea flyer-ului:', error);
    res.status(500).send('Eroare server!');
}

});

app.get('/api/generate-flyer', async (req, res) => {
    console.log("Generated Flyer");
    const { month, year, id } = req.query;

    console.log(`Month: ${month}, Year: ${year}, ID: ${id}`);

    if (!id) {
        return res.status(400).send('ID-ul utilizatorului este necesar!');
    }
    try {
        const jsonData = await fs.promises.readFile('./db/userData.json', 'utf8');
        const data = JSON.parse(jsonData);

        const user = data.users.find(u => u.id === id);

        if (!user) {
            return res.status(404).send('Utilizatorul nu a fost găsit!');
        }

        const payCheck = user.payChecks.find(pay => pay.month === month);

        if (!payCheck) {
            return res.status(404).send('Paycheck-ul pentru luna specificată nu a fost găsit!');
        }

        const htmlContent = getFlyerCopy(
            user.name,
            user.team,
            user.id,
            payCheck.salaryMonth,
            payCheck.totalWorkingDay,
            payCheck.finalNetIncome,
            payCheck.grossSalary,
            payCheck.netIncome,
            payCheck.meal
        );

        res.setHeader('Content-Type', 'text/html');
        res.send(htmlContent);
    } catch (error) {
        console.error('Eroare la generarea flyer-ului:', error);
        res.status(500).send('Eroare server!');
    }
});

app.get('/api/get-month-data', (req, res) => {
    const { month } = req.query;

    console.log(`Time-Sheet-Request: ${month}`);

    if (!month) {
        res.status(400).send('Luna nu a fost specificată!');
        return;
    }

    try {
        const tableHtml = getTable(month); 
        
        res.setHeader('Content-Type', 'text/html');
        res.send(tableHtml);
    } catch (error) {
        console.error('Eroare la generarea tabelului:', error);
        res.status(500).send('Eroare server!');
    }
});

app.post('/api/submit-timesheet', express.json(), (req, res) => {
    try {
        const { id, month, row1, row2 } = req.body; 

        if (!id || !Array.isArray(row1) || !Array.isArray(row2)) {
            return res.status(400).send('Datele nu sunt corecte!');
        }

        console.log('ID utilizator:', id);
        console.log('Row 1:', row1);
        console.log('Row 2:', row2);

        fs.readFile('./db/userData.json', 'utf8', (err, jsonData) => {
            if (err) {
                console.error('Eroare la citirea fișierului JSON:', err);
                return res.status(500).send('Eroare server!');
            }

            const data = JSON.parse(jsonData);

            const user = data.users.find(u => u.id === id);
            if (!user) {
                return res.status(404).send('Utilizatorul nu a fost găsit!');
            }

            const payCheck = user.payChecks.find(pay => pay.month === month);

            if (payCheck) {
                payCheck.workedR = row1;
                payCheck.workedO = row2;
            } /*else {
                // Dacă luna nu există, adăugăm un obiect nou pentru luna respectivă
                user.payChecks.push({
                    month: month,
                    salaryMonth: `${month} 2024`, // sau altă logică pentru anul curent
                    totalWorkingDay: "20", // aici poți adăuga logica ta pentru totalWorkingDay
                    finalNetIncome: "0", // completează cu datele dorite
                    grossSalary: "0", // completează cu datele dorite
                    netIncome: "0", // completează cu datele dorite
                    meal: "0", // completează cu datele dorite
                    workedR: row1,
                    workedO: row2,
                    leave: []
                });
            }*/

            fs.writeFile('./db/userData.json', JSON.stringify(data, null, 4), 'utf8', (writeErr) => {
                if (writeErr) {
                    console.error('Eroare la scrierea fișierului JSON:', writeErr);
                    return res.status(500).send('Eroare server!');
                }
                console.log('Fișierul a fost actualizat cu succes!');
                res.status(200).send('Datele au fost salvate cu succes!');
            });
        });

        try {
            const data = fs.readFileSync("./db/userData.json", 'utf-8');
            const jsonData = JSON.parse(data);
        
            const payChecks = jsonData.users[0].payChecks;
        
            const salaryMonths = payChecks.map(payCheck => payCheck.salaryMonth);
        
            const monthYearData = {
                month: salaryMonths.map(entry => entry.split(' ')[0]), 
                year: salaryMonths.map(entry => parseInt(entry.split(' ')[1])) 
            };
        
            fs.writeFileSync("./db/fluturas.json", JSON.stringify(monthYearData, null, 4), 'utf-8');
            console.log('Fișierul fluturas.json a fost creat cu succes!');
        } catch (error) {
            console.error('Eroare:', error);
        }

    } catch (error) {
        console.error('Eroare la primirea datelor:', error);
        res.status(500).send('Eroare server!');
    }
});

app.get('/api/user-data-with-requests', (req, res) => {
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

            const requestsCount = userRequests ? userRequests.req.length : 0;

            res.json({
                offDays: user.offDays || [],
                requestsCount: requestsCount
            });
        });
    });
});

app.post('/api/submit-request', express.json(), (req, res) => {
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
});

app.get('/api/get-requests', (req, res) => {
    fs.readFile('./db/offDaysQueue.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Eroare la citirea fișierului:', err);
            return res.status(500).send('Eroare server!');
        }

        const jsonData = JSON.parse(data);

        res.json(jsonData.requests || []);
    });
});


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
