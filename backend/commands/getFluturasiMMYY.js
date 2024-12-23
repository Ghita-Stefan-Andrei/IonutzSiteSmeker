const fs = require('fs');

function getFluturasiMMYY(req, res){
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
}

module.exports = { getFluturasiMMYY };