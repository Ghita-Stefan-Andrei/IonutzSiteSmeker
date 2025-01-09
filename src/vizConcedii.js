function vizConcedii() {
    document.querySelector('.menu').addEventListener('click', async () => {
        try {
            const month = getCurrentMonthInRomanian(); 
            const response = await fetch(`http://localhost:3000/api/getLeaveByMonth?month=${encodeURIComponent(month)}`);
            if (!response.ok) {
                throw new Error(`Eroare: ${response.statusText}`);
            }
            const data = await response.json();
            console.log('Date primite:', data);

            document.querySelector('.content').innerHTML = getAllConcedii();

            generateGrid(data, luni[month]); 
        } catch (error) {
            console.error('Eroare la cererea datelor:', error);
        }
    });
}