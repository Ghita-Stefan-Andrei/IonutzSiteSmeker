function pontaj() {
    document.querySelector('.pontaj').addEventListener('click', async () => {
        const targetMonth = getCurrentMonthInRomanian();
        const months = ['Septembrie', 'Octombrie', 'Noiembrie', 'Decembrie', 'Ianuarie', 'Februarie'];
        const table = [];
        
        document.querySelector('.content').innerHTML = getPontaj();
        document.querySelector('.month').innerHTML = targetMonth;

        const monthSelectorBuilder = document.querySelector('#monthSelector');
        let monthSelectorContent = '<option value="" disabled selected>Alege o lună</option>';
        for (let month of months) {
            monthSelectorContent += `<option value="${month}">${month}</option>`;
        }
        monthSelectorBuilder.innerHTML = monthSelectorContent;

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
                table.push('<p>Eroare la încărcarea datelor!</p>'); // Placeholder pentru lunile cu erori
            }
        }

        // Setează tabelul pentru luna curentă
        const initialIndex = months.indexOf(targetMonth);
        if (initialIndex >= 0) {
            document.querySelector('.timesheettable').innerHTML = table[initialIndex];
        }

        // Gestionare schimbare lună
        const monthSelector = document.querySelector('#monthSelector');
        monthSelector.addEventListener('change', () => {
            const selectedMonth = monthSelector.value;
            const index = months.indexOf(selectedMonth);

            if (index >= 0) {
                document.querySelector('.month').innerHTML = selectedMonth;
                document.querySelector('.timesheettable').innerHTML = table[index];
            }
        });

        // Gestionare eveniment input
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