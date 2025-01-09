const fs = require('fs');

async function getLeaveByMonth(req, res) {
    const { month } = req.query;

    if (!month) {
        return res.status(400).send('Luna este necesară!');
    }

    try {
        const jsonData = await fs.promises.readFile('./db/userData.json', 'utf8');
        const data = JSON.parse(jsonData);

        const responseArray = data.users.map(user => {
            const payCheck = user.payChecks.find(pay => pay.month === month);
            return {
                name: user.name,
                dates: payCheck ? payCheck.leave : [],
            };
        });

        res.json(responseArray);

    } catch (error) {
        console.error('Eroare la preluarea datelor:', error);
        res.status(500).send('Eroare server!');
    }
}

module.exports = { getLeaveByMonth };
