document.querySelector('.menu').addEventListener('click', () => {
    document.querySelector('.content').innerHTML = getMenu();
});


document.querySelector('.rapoarte').addEventListener('click', () => {
    document.querySelector('.content').innerHTML = getRapoarte();
});

const urlParams = new URLSearchParams(window.location.search);
let userId = urlParams.get('id');
let userType = urlParams.get('type');

loadAccount(userId);

fluturas(userId);
pontaj(userId);
cereri(userId);
lista(userId)
const details = getMonthDetails(2024, 11); 
