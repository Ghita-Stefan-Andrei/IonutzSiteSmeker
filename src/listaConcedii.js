function listaConcedii(ID) {
    document.querySelector('.rapoarte').addEventListener('click', async () => { let data;
      try {
        const response = await fetch(`http://localhost:3000/api/get-requests-personal?id=${ID}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
    
        data = await response.json();
        data.reverse();
        
      } catch (error) {
        document.querySelector('.content').innerHTML = `<h1 class="contentTitle"> Nu exista cereri de concediu</h1>`
      }
      if (data.length == 0)
      {
        document.querySelector('.content').innerHTML = `<h1> Nu exista cereri de concediu</h1>`
      }
      else
      {
        document.querySelector('.content').innerHTML = getListaConcedii(data);
      }
    });
  }
  