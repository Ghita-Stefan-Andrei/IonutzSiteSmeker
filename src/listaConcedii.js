async function listaConcedii(ID) {
    let data;
    try {
      const response = await fetch(`http://localhost:3000/api/get-requests-personal?id=${ID}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (!response.ok) {
        throw new Error(`Eroare: ${response.status} - ${response.statusText}`);
      }
  
      data = await response.json();
      data.reverse();
      
    } catch (error) {
      console.error("A apărut o eroare:", error);
      return null;
    }
  
    document.querySelector('.rapoarte').addEventListener('click', () => {
      document.querySelector('.content').innerHTML = getListaConcedii(data);
    });
  }
  