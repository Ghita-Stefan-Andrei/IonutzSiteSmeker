function pontaj(ID) {
    document.querySelector('.pontaj').addEventListener('click', async () => {
        const targetMonth = getCurrentMonthInRomanian();
        const months = ['Septembrie', 'Octombrie', 'Noiembrie', 'Decembrie', 'Ianuarie', 'Februarie'];
        const table = [];
        const pontaj = [];
        
        document.querySelector('.content').innerHTML = getPontaj();
        document.querySelector('.month').innerHTML = targetMonth;

        const monthSelectorBuilder = document.querySelector('#monthSelector');
        let monthSelectorContent = '';
        for (let month of months) {
            monthSelectorContent += `<option value="${month}">${month}</option>`;
        }
        monthSelectorBuilder.innerHTML += monthSelectorContent;

        for (let month of months) {
            try {
                const response = await fetch(`http://localhost:3000/api/get-month-data?month=${month}`, {
                    method: 'GET',
                });
                if (!response.ok) throw new Error('Eroare la obținerea datelor pentru lună!');
                const result = await response.text();
                table.push(result);
            } catch (error) {
                console.error('Eroare la obținerea datelor:', error);
                table.push('<p>Eroare la încărcarea datelor!</p>'); 
            }

            try {
                const response = await fetch(`http://localhost:3000/api/get-timesheet-data?id=${ID}&month=${month}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
        
                if (!response.ok) {
                    throw new Error('Network response was not ok' + response.statusText);
                }
        
                const data = await response.json();

                pontaj.push(data);

            } catch (error) {
                console.error('There was a problem with the fetch operation:', error);
            }
        }

        const monthSelector = document.querySelector('#monthSelector');
        const downloadButton = document.querySelector('.submite'); 

        const toggleDownloadButton = (selectedMonth) => {
            if (selectedMonth === targetMonth) {
                downloadButton.style.display = 'block';  
            } else {
                downloadButton.style.display = 'none';  
            }
        };
        
        document.querySelector('.submite').addEventListener('click', () => {
            const row1Values = [];
            const row2Values = [];
            const row3Values = [];

            let dataAboutMonth = getMonthDetails(2024, luni[targetMonth]);
            
            for (let col = 1; col <= dataAboutMonth.daysInMonth; col++) {

                const inputRow1 = document.querySelector(`.row-1-col-${col} input`);
                if (inputRow1) {
                    row1Values.push(parseFloat(inputRow1.value) || 0);
                } else {
                    const freeDayRow1 = document.querySelector(`.row-1-col-${col}.freeDay`);
                    row1Values.push(freeDayRow1 ? -1 : 0); 
                }
            
                const inputRow2 = document.querySelector(`.row-2-col-${col} input`);
                if (inputRow2) {
                    row2Values.push(parseFloat(inputRow2.value) || 0);
                } else {
                    const freeDayRow2 = document.querySelector(`.row-2-col-${col}.freeDay`);
                    row2Values.push(freeDayRow2 ? -1 : 0); 
                }
            }

            const dataToSend = {
                id: ID,
                month: targetMonth,
                row1: row1Values,
                row2: row2Values,
            };
        
            fetch('http://localhost:3000/api/submit-timesheet', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dataToSend),
            })
            .then(response => {
                if (!response.ok) throw new Error('Eroare la trimiterea datelor!');
                return response.text();
            })
            .then(data => {
                //console.log('Datele au fost trimise cu succes!', data);
            })
            .catch(error => {
                console.error('A apărut o eroare:', error);
            });
        });

        toggleDownloadButton(targetMonth); 

        monthSelector.addEventListener('change', () => {
            const selectedMonth = monthSelector.value;
            const index = months.indexOf(selectedMonth);
            const currentIndex = months.indexOf(targetMonth);

            if (index >= 0) {
                document.querySelector('.month').innerHTML = selectedMonth;
                document.querySelector('.timesheettable').innerHTML = table[index];

                toggleDownloadButton(selectedMonth);

                const inputs = document.querySelectorAll('.timesheettable input');
                inputs.forEach(input => {
                    if (selectedMonth !== targetMonth) {
                        input.disabled = true;  
                    } else {
                        input.disabled = false; 
                    }
                });
            }
            
            const data = pontaj[index]; 
            const workedR = data.workedR;
            const workedO = data.workedO;
            const leave = data.leave;
        
            populateRows(workedR, workedO, leave);

            recalculateTotals();

        });

        document.addEventListener('input', () => {
            for (let col = 1; col <= 31; col++) {
                let total = 0;
                for (let row = 1; row <= 2; row++) {
                    const input = document.querySelector(`.row-${row}-col-${col} input`);
                    if (input && input.value) {
                        total += parseFloat(input.value) || 0;
                    }
                }
                const totalCell = document.querySelector(`.row-3-col-${col}`);
                if (totalCell) {
                    totalCell.textContent = total;
                }
            }
        });

        const initialIndex = months.indexOf(targetMonth);
        if (initialIndex >= 0) {
            document.querySelector('.timesheettable').innerHTML = table[initialIndex];
            
            const data = pontaj[initialIndex]; 
            const workedR = data.workedR;
            const workedO = data.workedO;
            const leave = data.leave;
        
            populateRows(workedR, workedO, leave);
        }
    });
}
