const express = require('express');
const cors = require('cors'); 
const fs = require('fs');
const { getFlyerCopy } = require('./flyer');
const { getTable } = require('./calendar');
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

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
