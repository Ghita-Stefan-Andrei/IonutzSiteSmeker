document.querySelector('.menu').addEventListener('click', () => {
    document.querySelector('.content').innerHTML = getMenu();
});

document.querySelector('.fluturas').addEventListener('click', () => {
    const data = 
    {
        month: ["January", "March"],
        year: [2023, 2024]
    };
    document.querySelector('.content').innerHTML = getFlyer(data);
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
