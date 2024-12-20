function lista(ID){
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
    });

}