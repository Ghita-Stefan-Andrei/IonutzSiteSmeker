document.querySelector('.menu').addEventListener('click', () => {
    document.querySelector('.content').innerHTML = getMenu();
});

document.querySelector('.concedii').addEventListener('click', () => {
    document.querySelector('.content').innerHTML = getConcedii();
});

document.querySelector('.rapoarte').addEventListener('click', () => {
    document.querySelector('.content').innerHTML = getRapoarte();
});

document.querySelector('.cereri').addEventListener('click', () => {
    document.querySelector('.content').innerHTML = getCereri();
});

const urlParams = new URLSearchParams(window.location.search);
let userId = urlParams.get('id');

loadAccount(userId);

fluturas(userId)
pontaj(userId)
const details = getMonthDetails(2024, 11); 
