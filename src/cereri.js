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
    
        document.querySelector('.trimiteConcediu').addEventListener('click', async () => {
            const startDate = document.querySelector('#startDatePicker').value;
            const endDate = document.querySelector('#endDatePicker').value;
            const concediuSelect = document.getElementById('concediuSelector');
            let mailReplacer = document.querySelector('.mr1').value;
            let telefonUrgenta = document.querySelector('.mr2').value;

            const startDateConverted = new Date(startDate);
            const endDateConverted = new Date(endDate);

            const differenceInTime = endDateConverted - startDateConverted;
            const differenceInDays = differenceInTime / (1000 * 3600 * 24) + 1;
            
            const selectedOption = concediuSelect.value;

            const dayToCompare = (selectedOption === "medical") ? 1:0;

            if (!selectedOption) {
                alert('Te rugăm să selectezi un tip de concediu înainte de a trimite cererea.');
                return;
            }

            if (!(startDate && endDate)) {
                alert("Te rugam selecteaza date pt inceputul si sfarsitul concediului");
                return;
            } 

            if (differenceInDays > offDays[dayToCompare]){
                alert("Nu aveti atatea zile de concediu disponibile");
                return;
            }

            if (requestsCount){
                alert("Prea multe cereri in asteptare!");
                return;
            }

            if (mailReplacer === '')
                mailReplacer = 'Lipsa'

            if (telefonUrgenta === '')
                telefonUrgenta = 'Lipsa'

            const data = {
                ID,
                startDate,
                endDate,
                differenceInDays,
                selectedOption,
                mailReplacer,
                telefonUrgenta
            };

            try {
                const response = await fetch('http://localhost:3000/api/submit-request', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });
        
                if (!response.ok) {
                    throw new Error('Eroare la trimiterea cererii');
                }
        
                const message = await response.text(); 
                console.log('Răspuns backend:', message);
            } catch (error) {
                console.error('Eroare:', error);
            }
        });
    });

}