function getFlyer(data)
{
    let tableHTML = `
        ${getTitle('Descarca fluturas de salariu')}
        <div class="tableHolder bolder2">
            <table>
                <tr class="tableHead">
                    <td>LUNA</td>
                    <td>AN</td>
                    <td>SELECTARE FLUTURAS</td>
                </tr>
    `;

    for (let i = 0; i < data.month.length; i++) {
        tableHTML += `
            <tr class="dataLine">
                <td class="month">${data.month[i]}</td>
                <td class="year">${data.year[i]}</td>
                <td class = "downloadBtn">
                    <div class="download" data-month="${data.month[i]}" data-year="${data.year[i]}">
                        Descarca
                        <img src="../resources/file_download.png" alt="Download Icon">
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