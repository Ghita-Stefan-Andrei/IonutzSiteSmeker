document.querySelector('.menu').addEventListener('click', () => {
    document.querySelector('.content').innerHTML = getMenu();
});

document.querySelector('.fluturas').addEventListener('click', async () => {
    try {
        const response = await fetch('http://localhost:3000/api/data');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        
        document.querySelector('.content').innerHTML = getFlyer(data);
    } catch (error) {
        console.error('Eroare la obținerea datelor:', error);
    }
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
