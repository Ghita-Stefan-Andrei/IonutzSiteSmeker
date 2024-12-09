async function getPontaj(month)
{
    let content = `${getTitle('Pontaj')}`
    
    content += `<div class = "holder">
            <h2 class = "month"></h2>`
            
    try {
        const response = await fetch(`http://localhost:3000/api/get-month-data?month=${month}`, {
            method: 'GET',
        });

        if (!response.ok) {
            throw new Error('Eroare la obținerea datelor pentru lună!');
        }

        const result = await response.text();
        content += result;

    } catch (error) {
        console.error('Eroare la obținerea datelor:', error);
    }

    content += `<div class = "download">Submite</div>
            </div>`;
            
    return content
}