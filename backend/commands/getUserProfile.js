const fs = require('fs');

function getUserProfile(req, res) {
    const { id } = req.query; // Preluăm ID-ul din query params

    if (!id) {
        return res.status(400).send('ID-ul utilizatorului este necesar.');
    }

    // Citim fișierul JSON care conține baza de date
    fs.readFile('./db/userData.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Eroare la citirea fișierului:', err);
            return res.status(500).send('Eroare server!');
        }

        let jsonData;
        try {
            jsonData = JSON.parse(data); // Parsăm conținutul fișierului JSON
        } catch (parseError) {
            console.error('Eroare la parsarea fișierului JSON:', parseError);
            return res.status(500).send('Eroare la parsarea fișierului JSON!');
        }

        // Căutăm utilizatorul după ID
        const user = jsonData.users.find(user => user.id === id);

        if (!user) {
            return res.status(404).send('Utilizatorul nu a fost găsit.');
        }

        // Returnăm datele utilizatorului
        return res.json({
            name: user.name,
            email: user.email,
            team: user.team,
            rol: user.role,
            gross: user.grossSalary,
            netIncome: user.netIncome
        });
    });
}

module.exports = { getUserProfile };
