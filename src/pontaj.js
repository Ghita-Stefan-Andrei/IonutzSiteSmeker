function pontaj()
{
    document.querySelector('.pontaj').addEventListener('click', async () => {
        targetMonth = getCurrentMonthInRomanian();
        months = ['Septembrie', 'Octombrie', 'Noiembrie', 'Decembrie', 'Ianuarie', 'Februarie'];
        table = [];
        firstLoad = 1;
        
        document.querySelector('.content').innerHTML = getPontaj();
        
        document.querySelector('.month').innerHTML = targetMonth;
        for(let month = 0; month < 6; month++)
        {
            try {
                const response = await fetch(`http://localhost:3000/api/get-month-data?month=${months[month]}`, {
                    method: 'GET',
                });
            
                if (!response.ok) {
                    throw new Error('Eroare la obținerea datelor pentru lună!');
                }
            
                const result = await response.text();
                table.push(result);
            
            } catch (error) {
                console.error('Eroare la obținerea datelor:', error);
            }
        }
    
        document.querySelector('.timesheettable').innerHTML = table[months.indexOf(targetMonth)];
    
        const monthSelector = document.querySelector('#monthSelector');
        monthSelector.addEventListener('change', () => {
            const selectedMonth = monthSelector.value;
            const index = months.indexOf(selectedMonth);
        
            if (index > 0) {
            
                document.querySelector('.month').innerHTML = selectedMonth;
                
                document.querySelector('.timesheettable').innerHTML = table[index];
            
                document.addEventListener("input", () => {
                    for (let col = 1; col <= 31; col++) {
                        let total = 0;
                        for (let row = 1; row <= 2; row++) {
                            const input = document.querySelector(`.row-${row}-col-${col} input`);
                            if (input && input.value) {
                                total += parseFloat(input.value) || 0;
                            }
                        }
                        document.querySelector(`.row-3-col-${col}`).textContent = total;
                    }
                });
            }
        });
    });
}


