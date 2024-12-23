const fs = require('fs');
const { getTable } = require('../calendar');

function sendTables(req, res){
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
}

module.exports = { sendTables };