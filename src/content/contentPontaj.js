function getPontaj(month)
{
    let content = `${getTitle('Pontaj')}`
    
    content += `<div class = "holder">
            <div class = "tableHolderHeader">
                <h2 class = "month"></h2>
                <select id="monthSelector">
                    <option value="Septembrie">Septembrie</option>
                    <option value="Octombrie">Octombrie</option>
                    <option value="Noiembrie">Noiembrie</option>
                    <option value="Decembrie">Decembrie</option>
                    <option value="Ianuarie">Ianuarie</option>
                    <option value="Februarie">Februarie</option>
                </select>
            </div>
            <table class="timesheettable">
            </table>
            <div class = "download">Submite</div>
            </div>`;
            
    return content
}