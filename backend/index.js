const express = require('express');
const cors = require('cors'); 
const fs = require('fs');
const puppeteer = require('puppeteer');
const { getFlyerCopy } = require('./flyer');
const app = express();

app.use(cors());

app.get('/api/data', (req, res) => {
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

app.get('/api/generate-flyer', async (req, res) => {
    const { month, year } = req.query;
    
    const htmlContent = getFlyerCopy("Ion Popescu", "Frecator de menta", 6969, 9000, 21, 6000, 8000, 7000, 300);

    res.setHeader('Content-Type', 'text/html');
    res.send(htmlContent);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
