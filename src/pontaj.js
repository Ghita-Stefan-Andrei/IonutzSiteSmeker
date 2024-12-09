async function pontaj()
{
    month = getCurrentMonthInRomanian();
    table = await getPontaj(month);

    document.querySelector('.pontaj').addEventListener('click', () => {
        document.querySelector('.content').innerHTML = table;
        document.querySelector('.month').innerHTML = month;

        document.addEventListener("input", function() {
            const totalRowCells = document.querySelectorAll('.row-3-col-1, .row-3-col-2, .row-3-col-3, .row-3-col-4, .row-3-col-5, .row-3-col-6, .row-3-col-7, .row-3-col-8, .row-3-col-9, .row-3-col-10, .row-3-col-11, .row-3-col-12, .row-3-col-13, .row-3-col-14, .row-3-col-15, .row-3-col-16, .row-3-col-17, .row-3-col-18, .row-3-col-19, .row-3-col-20, .row-3-col-21, .row-3-col-22, .row-3-col-23, .row-3-col-24, .row-3-col-25, .row-3-col-26, .row-3-col-27, .row-3-col-28, .row-3-col-29, .row-3-col-30, .row-3-col-31'); 
        
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
    });
}