document.querySelector('.menu').addEventListener('click', () => {
    document.querySelector('.content').innerHTML = getMenu();
});



document.querySelector('.pontaj').addEventListener('click', () => {
    document.querySelector('.content').innerHTML = getPontaj();
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


