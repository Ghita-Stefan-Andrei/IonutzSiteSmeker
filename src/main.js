document.querySelector('.menu').addEventListener('click', () => {
    document.querySelector('.content').innerHTML = getMenu();
});


document.querySelector('.rapoarte').addEventListener('click', () => {
    document.querySelector('.content').innerHTML = getRapoarte();
});




const urlParams = new URLSearchParams(window.location.search);
let userId = urlParams.get('id');
let userType = urlParams.get('type');

const logInfoElement = document.querySelector(".logInfo");

logInfoElement.addEventListener("click", function() {
    window.open(`profile.html?id=${userId}`, '_blank');
});

loadAccount(userId);

fluturas(userId);
pontaj(userId);
cereri(userId);
lista(userId, userType);
listaConcedii(userId);
const details = getMonthDetails(2024, 11); 
