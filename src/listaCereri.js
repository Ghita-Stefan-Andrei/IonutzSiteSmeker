function lista(ID, empType){
    document.querySelector('.concedii').addEventListener('click', async () => {
        let data =[];
        try {
            const response = await fetch('http://localhost:3000/api/get-requests', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
        
            data = await response.json();
        
            if (Array.isArray(data) && data.length === 0) {
                console.log('Nu există cereri');
            } else {
                console.log('Cereri găsite:', data);
            }
        
        } catch (error) {
            console.error('Error fetching request:', error);
        }
        
        document.querySelector('.content').innerHTML = getConcedii(data);

        const buttons = document.querySelectorAll('.requestList button');
        
        if(empType == "manager")
            buttons.forEach(button => {
                button.addEventListener('click', (event) => {

                    const userId = button.getAttribute('data-user-id');
                    const requestId = button.getAttribute('data-request-id');
                    const action = button.getAttribute('data-action'); 
                
                    const payload = {
                        id: userId,
                        requestID: requestId,
                        status: action === 'accept' ? 'approved' : 'rejected'
                    };

                    fetch('http://localhost:3000/api/update-request-status', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(payload)
                    })
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Eroare la actualizarea cererii');
                        }
                        return response.json();
                    })
                    .then(data => {
                        console.log('Răspuns server:', data);
                        button.closest('.reqestElement').remove();
                    })
                    .catch(error => {
                        console.error('Eroare la trimiterea cererii:', error);
                    });
                });
            });
    });
}