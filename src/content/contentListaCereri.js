function getConcedii(data, empType) {
    let content = "";
    if(empType == "manager"){
        content = `${getTitle('Concedii ce necesita aprobare')}
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
        
            request.req.forEach(req => {
                const tipConcediu = req.selectedOption;
                const perioada = `${req.startDate} - ${req.endDate}`;
                const durata = req.differenceInDays + " Zile";
                const userId = request.id; 
                const requestId = req.requestID; 
            
                content += `
                <div class="reqestElement">
                    <span>${angajat}</span>
                    <span>${tipConcediu}</span>
                    <span>${perioada}</span>
                    <span>${durata}</span>
                    <span class="astept sWrapper"><div class="wrapperStatus">In Asteptare</div></span>  
                    <div class="btnHolder">
                        <button data-user-id="${userId}" data-request-id="${requestId}" data-action="accept"></button>
                        <button data-user-id="${userId}" data-request-id="${requestId}" data-action="refuz"></button>
                    </div>
                </div>`;
            });
        });
    
        content += `</div>`; 
    }
    else{
        content = `${getTitle('Concedii ce necesita aprobare')}
        <div class="requestList">
            <div class="requestTitle">
                <span>Angajat</span>
                <span>Tipul concediului</span>
                <span>Perioada</span>
                <span>Durata</span>
                <span>Status</span>
            </div>`;

        data.forEach(request => {
            const angajat = request.name;

            request.req.forEach(req => {
                const tipConcediu = req.selectedOption;
                const perioada = `${req.startDate} - ${req.endDate}`;
                const durata = req.differenceInDays + " Zile";
                const userId = request.id; 
                const requestId = req.requestID; 

                content += `
                <div class="reqestElement">
                    <span>${angajat}</span>
                    <span>${tipConcediu}</span>
                    <span>${perioada}</span>
                    <span>${durata}</span>
                    <span class="astept sWrapper"><div class="wrapperStatus">In Asteptare</div></span>  
                </div>`;
            });
        });

        content += `</div>`; 
    }
    return content;
}
