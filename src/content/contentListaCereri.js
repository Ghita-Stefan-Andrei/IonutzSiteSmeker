function getConcedii(data) {
    let content = `${getTitle('Concedii ce necesita aprobare')}
    <div class="requestList">
        <div class="requestTitle">
            <span>Angajat</span>
            <span>Tipul concediului</span>
            <span>Perioada</span>
            <span>Durata</span>
            <span>Status</span>
            <span>Accepta/Refuza</span>
        </div>`;

    data.forEach(request => {
        
        const angajat = request.name;  
        const tipConcediu = request.req[0].selectedOption;  
        const perioada = `${request.req[0].startDate} - ${request.req[0].endDate}`;
        const durata = request.req[0].differenceInDays + " Zile";

        content += `
        <div class="reqestElement">
            <span>${angajat}</span>
            <span>${tipConcediu}</span>
            <span>${perioada}</span>
            <span>${durata}</span>
            <span class="astept sWrapper"><div class="wrapperStatus">In Asteptare</div></span>  
            <div class="btnHolder">
                <button></button>
                <button></button>
            </div>
        </div>`;
    });

    content += `</div>`;  
    return content;
}
