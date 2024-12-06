function getFlyer(data)
{
    let tableHTML = `
        ${getTitle('Descarca fluturas de salariu')}
        <div class="tableHolder">
            <table>
                <tr class="tableHead">
                    <td>LUNA</td>
                    <td>AN</td>
                    <td>FLUTURAS</td>
                </tr>
    `;

    for (let i = 0; i < data.month.length; i++) {
        tableHTML += `
            <tr class="dataLine">
                <td class="month">${data.month[i]}</td>
                <td class="year">${data.year[i]}</td>
                <td class="download">
                    <div>
                        Descarca
                        <img src="resources/file_download.png" alt="Download Icon">
                    </div>
                </td>
            </tr>
        `;
    }

    tableHTML += `
            </table>
        </div>
    `;

    return tableHTML;
}

function getMenu()
{
    return getTitle(`Meniu Principal`);
}

function getRapoarte()
{
    let content = `${getTitle('Rapoarte')}`

    return content
}

function getPontaj()
{
    let content = `${getTitle('Pontaj')}`

    return content
}

function getConcedii()
{
    let content = `${getTitle('Concedii ce necesita aprobare')}`

    return content
}

function getCereri()
{
    let content = `${getTitle('Cerere noua de concediu')}`

    return content
}
