const params = new URLSearchParams(window.location.search);
const userId = params.get('id');

try {
    const response = await fetch('/api/profile'); // Endpoint-ul backend-ului
    if (!response.ok) {
        throw new Error('Eroare la obținerea datelor');
    }

    const data = await response.json();

    document.querySelector('.name').textContent = data.name || 'Necunoscut';
    document.querySelector('.email').textContent = data.email || 'Necunoscut';
    document.querySelector('.team').textContent = data.team || 'Necunoscut';
    document.querySelector('.rol').textContent = data.rol || 'Necunoscut';
    document.querySelector('.brut').textContent = data.gross || 'Necunoscut';
    document.querySelector('.NET').textContent = data.netIncome || 'Necunoscut';

} catch (error) {
    console.error('Eroare:', error);
}