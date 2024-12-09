async function loadAccount(id)
{
    try {
        const response = await fetch(`http://localhost:3000/api/user-info?id=${id}`);
        if (!response.ok) {
            throw new Error('Eroare la primirea datelor de la server!');
        }

        const data = await response.json();

        document.querySelector('.logInfoName').textContent = data.name;
        document.querySelector('.logInfoMail').textContent = data.email;
        document.querySelectorAll('.teamInfoElement')[0].textContent = data.manager; 
        document.querySelectorAll('.teamInfoElement')[1].textContent = data.team;   
    } catch (error) {
        console.error('Eroare la actualizarea informațiilor utilizatorului:', error);
    }
}