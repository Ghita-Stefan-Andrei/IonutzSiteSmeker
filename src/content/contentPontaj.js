function getPontaj(month)
{
    let content = `${getTitle('Pontaj')}`
    
    content += `<div class = "holder">
            <div class = "tableHolderHeader">
                <h2 class = "month"></h2>
                <select id = "monthSelector">
                </select>
            </div>
            <table class="timesheettable">
            </table>
            <div class = "download">Submite</div>
            </div>`;
            
    return content
}