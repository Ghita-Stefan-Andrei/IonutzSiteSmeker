const fs = require('fs');

function getNavBarInfo(req, res){
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
}

module.exports = { getNavBarInfo };