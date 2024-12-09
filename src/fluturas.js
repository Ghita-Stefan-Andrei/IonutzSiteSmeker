function fluturas()
{
    document.querySelector('.fluturas').addEventListener('click', async () => {
        try {
            const response = await fetch('http://localhost:3000/api/data');
            if (!response.ok) throw new Error('Network response was not ok');
            const data = await response.json();

            document.querySelector('.content').innerHTML = getFlyer(data);

            const downloadButtons = document.querySelectorAll('.download');
            downloadButtons.forEach(button => {
                button.addEventListener('click', async (e) => {
                    const month = e.target.getAttribute('data-month');
                    const year = e.target.getAttribute('data-year');

                    try {
                        const response = await fetch(`http://localhost:3000/api/generate-flyer?month=${month}&year=${year}`, {
                            method: 'GET',
                        });

                        if (!response.ok) {
                            throw new Error('Eroare la generarea flyer-ului!');
                        }

                        const htmlContent = await response.text();

                        const newWindow = window.open('', '_blank');
                        newWindow.document.write(htmlContent);
                        newWindow.document.close();

                    } catch (err) {
                        console.error('Eroare la descărcarea flyer-ului:', err);
                    }
                });
            });
        } catch (error) {
            console.error('Eroare la obținerea datelor:', error);
        }
    });
}