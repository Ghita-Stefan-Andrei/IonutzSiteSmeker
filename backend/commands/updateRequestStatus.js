const fs = require('fs');

function updateRequestStatus(req, res){
    const { id, requestID, status } = req.body;

    if (!id || !requestID || !status) {
        return res.status(400).send('Date incomplete! ID, requestID și status sunt necesare.');
    }

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
            return res.status(500).send('Eroare la parsarea fișierului!');
        }

        const userRequest = jsonData.requests.find(request => request.id === id);

        if (userRequest) {
            const specificRequest = userRequest.req.find(req => req.requestID === requestID);

            if (specificRequest) {
                specificRequest.status = status;

                fs.writeFile('./db/offDaysQueue.json', JSON.stringify(jsonData, null, 2), (writeErr) => {
                    if (writeErr) {
                        console.error('Eroare la salvarea fișierului:', writeErr);
                        return res.status(500).send('Eroare la salvarea cererii!');
                    }

                    return res.json({ message: 'Status actualizat cu succes!' });
                });
            } else {
                return res.status(404).send('Cerererea nu a fost găsită!');
            }

            const months = [
                "Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie",
                "Iulie", "August", "Septembrie", "Octombrie", "Noiembrie", "Decembrie"
            ];

            const monthDays = {};

            specificRequest.dateRange.forEach(date => {
                const parsedDate = new Date(date);
                const monthName = months[parsedDate.getMonth()];
                const day = parsedDate.getDate();

                if (!monthDays[monthName]) {
                    monthDays[monthName] = [];
                }

                monthDays[monthName].push(day);
            });

            if(status === "approved")
                fs.readFile('./db/userData.json', 'utf8', (userErr, userData) => {
                    if (userErr) {
                        console.error('Eroare la citirea fișierului userData.json:', userErr);
                        return res.status(500).send('Eroare server la citirea userData!');
                    }

                    let users;
                    try {
                        users = JSON.parse(userData);
                    } catch (parseUserErr) {
                        console.error('Eroare la parsarea fișierului userData.json:', parseUserErr);
                    }

                    const user = users.users.find(user => user.id === id);

                    user.offDays[(specificRequest.selectedOption === "medical") ? 1:0] -= specificRequest.differenceInDays;

                    Object.entries(monthDays).forEach(([month, days]) => {
                        let paycheck = user.payChecks.find(pc => pc.month === month);

                        if (paycheck) {
                            paycheck.leave = [...new Set([...paycheck.leave, ...days])];
                        } else {
                            user.payChecks.push({
                                month,
                                salaryMonth: "",
                                totalWorkingDay: "",
                                finalNetIncome: "",
                                grossSalary: "",
                                netIncome: "",
                                meal: "",
                                workedR: [],
                                workedO: [],
                                leave: days
                            });
                        }
                    });

                    fs.writeFile('./db/userData.json', JSON.stringify(users, null, 2), (writeErr) => {
                        if (writeErr) {
                            console.error('Eroare la salvarea fișierului userData.json:', writeErr);
                        }
                    });
                });
        } else {
            return res.status(404).send('Utilizatorul nu a fost găsit!');
        }
    });
}

module.exports = { updateRequestStatus };