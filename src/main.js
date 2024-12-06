document.querySelector('.menu').addEventListener('click', () => {
    document.querySelector('.content').innerHTML = `
        <h2>Meniu Principal</h2>
        <p>Aici sunt elementele meniului principal...</p>
    `;
});

document.querySelector('.fluturas').addEventListener('click', () => {
    document.querySelector('.content').innerHTML = flyer;
});

document.querySelector('.pontaj').addEventListener('click', () => {
    document.querySelector('.content').innerHTML = `
        <h2>Pontaj</h2>
        <p>Aici se află pontajul tău...</p>
    `;
});

document.querySelector('.concedii').addEventListener('click', () => {
    document.querySelector('.content').innerHTML = `
        <h2>Concedii</h2>
        <p>Concedii ce necesită aprobare...</p>
    `;
});

document.querySelector('.rapoarte').addEventListener('click', () => {
    document.querySelector('.content').innerHTML = `
        <h2>Rapoarte</h2>
        <p>Aici se află rapoartele tale...</p>
    `;
});

document.querySelector('.cereri').addEventListener('click', () => {
    document.querySelector('.content').innerHTML = `
        <h2>Cereri de concediu</h2>
        <p>Poți crea o cerere nouă de concediu aici...</p>
    `;
});
