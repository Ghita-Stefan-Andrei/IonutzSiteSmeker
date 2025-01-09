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

vizConcedii();