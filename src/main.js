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

function getRandomUserId() {
    const randomNumber = Math.floor(Math.random() * 10) + 1; 
    return randomNumber.toString().padStart(8, '0'); 
}

userId = "00000001";//getRandomUserId()

loadAccount(userId);

fluturas(userId)
pontaj(userId)
const details = getMonthDetails(2024, 11); 
//console.log(details);