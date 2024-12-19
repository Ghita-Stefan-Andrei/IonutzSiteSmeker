function getPontaj()
{
    let content = `${getTitle('Pontaj')}`
    
    content += `<div class = "holder">
            <div class = "tableHolderHeader">
                <h2 class = "month"></h2>
                <select id = "monthSelector" class = "dropdown">
                    <option value="" disabled selected>Alege o lună</option>
                </select>
            </div>
            <table class="timesheettable">
            </table>
            <div class = "submite"><div>Submite</div></div>
            </div>`;
            
    return content
}