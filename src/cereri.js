function cereri(ID)
{
    document.querySelector('.cereri').addEventListener('click', async () => {
        document.querySelector('.content').innerHTML = getCereri();
        let offDays = [];
        let requestsCount = 0;
        try {
            const response = await fetch(`http://localhost:3000/api/user-data-with-requests?id=${ID}`);
    
            if (!response.ok) {
                throw new Error('Eroare la obținerea datelor utilizatorului');
            }
    
            const data = await response.json();
    
            offDays = data.offDays || [];
            requestsCount = data.requestsCount;
    
        } catch (error) {
            console.error('Eroare:', error);
        }
        
        document.querySelector('.normalDisplay').textContent = offDays[0] || 0;
        document.querySelector('.medicalDisplay').textContent = offDays[1] || 0;
        document.querySelector('.cereriDisplay').textContent = requestsCount;
    
        document.querySelector('.trimiteConcediu').addEventListener('click', () => {
            console.log('Buna');

            const startDate = document.querySelector('#startDatePicker').value;
            const endDate = document.querySelector('#endDatePicker').value;

            if (startDate && endDate) {
                console.log(`Data de început: ${startDate}`);
                console.log(`Data de sfârșit: ${endDate}`);
            } else {
                alert("Te rugam selecteaza date pt inceputul si sfarsitul concediului");
                return;
            }

            const startDate2 = new Date(startDate);
            const endDate2 = new Date(endDate);

            const differenceInTime = endDate2 - startDate2;
            const differenceInDays = differenceInTime / (1000 * 3600 * 24) + 1;

            if (differenceInDays > offDays[0]) //TODO modifica indexu in functie de tipu cererii
            {
                alert("Nu aveti atatea zile de concediu disponibile");
                return;
            }

            console.log(differenceInDays);
        });
    });

}