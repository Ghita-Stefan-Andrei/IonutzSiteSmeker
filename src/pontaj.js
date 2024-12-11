function pontaj() {
    document.querySelector('.pontaj').addEventListener('click', async () => {
        const targetMonth = getCurrentMonthInRomanian();
        const months = ['Septembrie', 'Octombrie', 'Noiembrie', 'Decembrie', 'Ianuarie', 'Februarie'];
        const table = [];
        
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
        }

        const initialIndex = months.indexOf(targetMonth);
        if (initialIndex >= 0) {
            document.querySelector('.timesheettable').innerHTML = table[initialIndex];
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

        toggleDownloadButton(targetMonth); 

        monthSelector.addEventListener('change', () => {
            const selectedMonth = monthSelector.value;
            const index = months.indexOf(selectedMonth);

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
    });
}
