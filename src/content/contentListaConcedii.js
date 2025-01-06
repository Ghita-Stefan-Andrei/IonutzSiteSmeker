function getListaConcedii(data)
{
    let content = `${getTitle('Lista cereri de concediu')}
    <div class="requestList">
        <div class="requestTitle">
            <span>Tipul concediului</span>
            <span>Perioada</span>
            <span>Durata</span>
            <span>Status</span>
        </div>`;

    data.forEach(req => {
        const tipConcediu = req.selectedOption;
        const perioada = `${req.startDate} - ${req.endDate}`;
        const durata = req.differenceInDays + " Zile";
        const status = req.status;
        let htmlClass = "";
        let htmlContent = "";

        switch (status) {
            case "approved":
                htmlClass = "accept";
                htmlContent = "Acceptat"
              break;
            case "pending":
                htmlClass = "astept";
                htmlContent = "In Asteptare"
              break;
            case "rejected":
                htmlClass = "refuz";
                htmlContent = "Refuzat"
              break;
            default:
                htmlClass = "Valoare necunoscută";
          }
        content += `
        <div class="reqestElement">
            <span>${tipConcediu}</span>
            <span>${perioada}</span>
            <span>${durata}</span>
            <span class="${htmlClass} sWrapper"><div class="wrapperStatus">${htmlContent}</div></span>
        </div>`;
    });

    content += `</div>`; 
    
    return content;
}
