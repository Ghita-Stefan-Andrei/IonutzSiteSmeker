function getFlyerCopy(name, desig, empID, salarMonth, workDays, fNetIncome, salar, netIncome, meal)
{
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .topBar {
            display: flex;
            width: 100%;
        }

        .blackRectangle {
            background-color: #333333;
            height: 110px; /* poți ajusta în funcție de înălțimea dorită */
            width: 30%;
        }

        .logo {
            border-top: 2px solid #333333;
            border-bottom: 2px solid #333333;
            width: 40%;
            display: flex;
            flex-direction: column; 
            align-items: center;
        }

        .logo img {
            width: 330px;
            height: 80px;
            margin: 0px;
        }

        .Title {
            font-family: 'Inter', sans-serif;
            border-top: 2px solid #333333;
            width: 100%;
            text-align: center;
            font-weight: bold;
        }

        .colon{
            margin-right: 0.5em;
        }

        .container {
            width: 1800px;
            display: flex;
            flex-direction: column; 
            align-items: center; 
        }

        .empDesc {
            display: grid;
            grid-template-columns: repeat(2, 1fr); 
            width: 100%; 
            margin-top: 4em;
            margin-bottom: 4em;
            padding-left: 5em;
            gap: 1em;
            grid-column-gap: 45em;
        }

        .atribute {
            font-family: 'Inter', sans-serif;
            font-size: 22px;
            display: flex;
            align-items: center;
        }

        .atributeName {
            width: 40%; 
        }

        .name .id .Designation .Salary{
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .footer{
            width: 100%;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            font-family: 'Inter', sans-serif;
            font-size: 16px;
        }

        th, td {
            padding: 10px;
            text-align: center;
            border: 1px solid #ccc;
        }

        .headerRow {
            background-color: #333333;
            color: white;
            font-weight: bold;
        }

        th{
            height: 1.25em;
        }

        td{
            height: 2.5em;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="topBar">
            <div class="blackRectangle"></div>
            <div class="logo">
                <img src="../resources/flyerLogo.png">
                <div class="Title">Salary Slip</div>
            </div>
            <div class="blackRectangle"></div>
        </div>

        <div class="empDesc">
            <div class="atribute">
                <span class="atributeName"> Name</span>
                <span class="colon">:</span>
                <span class="name">${name}</span>
            </div>

            <div class="atribute">
                <span class="atributeName"> Employee ID</span>
                <span class="colon">:</span>
                <span class="id">${empID}</span>
            </div>

            <div class="atribute">
                <span class="atributeName"> Designation</span>
                <span class="colon">:</span>
                <span class="Designation">${desig}</span>
            </div>

            <div class="atribute">
                <span class="atributeName"> Salary Month</span>
                <span class="colon">:</span>
                <span class="Salary">${salarMonth}</span>
            </div>
        </div>
        
        <div class="footer">
            <table>
                <thead>
                    <tr class="headerRow">
                        <th>Total Working Days</th>
                        <th>Final Net Income</th>
                        <th>Gross Salary</th>
                        <th>Net income</th>
                        <th>Meal Tickets</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="workDays">  ${workDays}</td>
                        <td class="fNetIncome">${fNetIncome}</td>
                        <td class="salary">    ${salar}</td>
                        <td class="netIncome"> ${netIncome}</td>
                        <td class="meal">      ${meal}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</body>
</html>
`
}

module.exports = { getFlyerCopy };