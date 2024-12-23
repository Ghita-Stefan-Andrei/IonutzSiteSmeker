const fs = require('fs');

async function setArraysOfWorkedHours(req, res){
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
}

module.exports = { setArraysOfWorkedHours };