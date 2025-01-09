const fs = require('fs');

function getRequestsByUserId(req, res) {
    const { id } = req.query; // ID-ul utilizatorului este primit ca query parameter.

    if (!id) {
        return res.status(400).send('ID-ul utilizatorului este necesar.');
    }

    // Citirea fișierului JSON.
    fs.readFile('./db/offDaysQueue.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Eroare la citirea fișierului:', err);
            return res.status(500).send('Eroare server!');
        }

        let jsonData;
        try {
            jsonData = JSON.parse(data);
        } catch (parseError) {
            console.error('Eroare la parsarea fișierului JSON:', parseError);
            return res.status(500).send('Eroare la parsarea fișierului JSON!');
        }

        // Căutarea utilizatorului după ID.
        const user = jsonData.requests.find(user => user.id === id);

        if (!user) {
            return res.status(404).send('');
        }

        // Returnarea listei `req`.
        return res.json(user.req);
    });
}

module.exports = { getRequestsByUserId };
