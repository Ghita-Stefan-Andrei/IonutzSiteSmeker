const fs = require('fs');

async function loadPersonalProfile(req, res){
    const { id } = req.query;

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

        res.json(user); 
    } catch (error) {
        console.error('Eroare la citirea fișierului:', error);
        res.status(500).send('Eroare server!');
    }
}

module.exports = { loadPersonalProfile };