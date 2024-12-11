const fs = require('fs');

function addNewUserToFile(name, email, manager, team) {
    const filePath = './db/userData.json'; // Asigură-te că acesta este calea corectă către fișierul tău JSON.

    // Citește fișierul JSON
    const data = fs.readFileSync(filePath, 'utf-8');
    const userData = JSON.parse(data);

    // Găsește ultimul ID și calculează ID-ul nou
    const lastUser = userData.users[userData.users.length - 1];
    const newId = (parseInt(lastUser.id) + 1).toString().padStart(8, '0');

    // Creează un nou utilizator
    const newUser = {
        id: newId,
        name: name,
        email: email,
        manager: manager,
        team: team,
        payChecks: []
    };

    // Adaugă utilizatorul nou în array-ul de utilizatori
    userData.users.push(newUser);

    // Salvează datele actualizate în fișier
    fs.writeFileSync(filePath, JSON.stringify(userData, null, 4));

    console.log(`Utilizatorul cu ID-ul ${newId} a fost adăugat cu succes.`);
}

function addPayCheckToUser(id, month, salaryMonth, totalWorkingDay, finalNetIncome, grossSalary, netIncome, meal) {
    const filePath = './db/userData.json'; // Calea către fișierul JSON.

    // Citește fișierul JSON
    const data = fs.readFileSync(filePath, 'utf-8');
    const userData = JSON.parse(data);

    // Caută utilizatorul cu ID-ul specificat
    const user = userData.users.find(user => user.id === id);

    if (!user) {
        console.error(`Utilizatorul cu ID-ul ${id} nu a fost găsit.`);
        return;
    }

    // Creează un obiect paycheck
    const newPayCheck = {
        month: month,
        salaryMonth: salaryMonth,
        totalWorkingDay: totalWorkingDay,
        finalNetIncome: finalNetIncome,
        grossSalary: grossSalary,
        netIncome: netIncome,
        meal: meal
    };

    // Adaugă noul paycheck la vectorul utilizatorului
    user.payChecks.push(newPayCheck);

    // Salvează datele actualizate în fișier
    fs.writeFileSync(filePath, JSON.stringify(userData, null, 4));

    console.log(`Paycheck-ul pentru luna ${month} a fost adăugat utilizatorului cu ID-ul ${id}.`);
}

addPayCheckToUser("00000011", "Decembrie", "9", "8", "7", "6", "5", "4");