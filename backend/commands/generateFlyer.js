const fs = require('fs');
const { getFlyerCopy } = require('../flyer');

async function generateFlyer(req, res){
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
            user.grossSalary,
            user.netIncome,
            payCheck.meal
        );

        res.setHeader('Content-Type', 'text/html');
        res.send(htmlContent);
    } catch (error) {
        console.error('Eroare la generarea flyer-ului:', error);
        res.status(500).send('Eroare server!');
    }
}

module.exports = { generateFlyer };