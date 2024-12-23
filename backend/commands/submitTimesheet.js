const fs = require('fs');

function submitTimesheet(req, res){
    try {
        const { id, month, row1, row2 } = req.body; 

        if (!id || !Array.isArray(row1) || !Array.isArray(row2)) {
            return res.status(400).send('Datele nu sunt corecte!');
        }

        console.log('ID utilizator:', id);
        console.log('Row 1:', row1);
        console.log('Row 2:', row2);

        fs.readFile('./db/userData.json', 'utf8', (err, jsonData) => {
            if (err) {
                console.error('Eroare la citirea fișierului JSON:', err);
                return res.status(500).send('Eroare server!');
            }

            const data = JSON.parse(jsonData);

            const user = data.users.find(u => u.id === id);
            if (!user) {
                return res.status(404).send('Utilizatorul nu a fost găsit!');
            }

            const payCheck = user.payChecks.find(pay => pay.month === month);

            if (payCheck) {
                payCheck.workedR = row1;
                payCheck.workedO = row2;
            } /*else {
                // Dacă luna nu există, adăugăm un obiect nou pentru luna respectivă
                user.payChecks.push({
                    month: month,
                    salaryMonth: `${month} 2024`, // sau altă logică pentru anul curent
                    totalWorkingDay: "20", // aici poți adăuga logica ta pentru totalWorkingDay
                    finalNetIncome: "0", // completează cu datele dorite
                    grossSalary: "0", // completează cu datele dorite
                    netIncome: "0", // completează cu datele dorite
                    meal: "0", // completează cu datele dorite
                    workedR: row1,
                    workedO: row2,
                    leave: []
                });
            }*/

            fs.writeFile('./db/userData.json', JSON.stringify(data, null, 4), 'utf8', (writeErr) => {
                if (writeErr) {
                    console.error('Eroare la scrierea fișierului JSON:', writeErr);
                    return res.status(500).send('Eroare server!');
                }
                console.log('Fișierul a fost actualizat cu succes!');
                res.status(200).send('Datele au fost salvate cu succes!');
            });
        });

        try {
            const data = fs.readFileSync("./db/userData.json", 'utf-8');
            const jsonData = JSON.parse(data);
        
            const payChecks = jsonData.users[0].payChecks;
        
            const salaryMonths = payChecks.map(payCheck => payCheck.salaryMonth);
        
            const monthYearData = {
                month: salaryMonths.map(entry => entry.split(' ')[0]), 
                year: salaryMonths.map(entry => parseInt(entry.split(' ')[1])) 
            };
        
            fs.writeFileSync("./db/fluturas.json", JSON.stringify(monthYearData, null, 4), 'utf-8');
            console.log('Fișierul fluturas.json a fost creat cu succes!');
        } catch (error) {
            console.error('Eroare:', error);
        }

    } catch (error) {
        console.error('Eroare la primirea datelor:', error);
        res.status(500).send('Eroare server!');
    }
}

module.exports = { submitTimesheet };