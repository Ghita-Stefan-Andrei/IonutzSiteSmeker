function getCereri()
{
    let content = `${getTitle('Cerere noua de concediu')}`
    content += `<div class = "bolder">
            <div class = "holidayDisplayElement">
                <h1 class = "dayDisplay normalDisplay">-</h1>
                <img src = "../resources/vacationIcons/availableDays.png">
                <h2 class = "elementTitle">Zile disponibile</h2>
                <h3 class = "elementTitleSubText">pentru concedii de odihna</h3>
            </div>
            
            <div class = "holidayDisplayElement">
                <h1 class = "dayDisplay medicalDisplay">-</h1>
                <img src = "../resources/vacationIcons/buba.png">
                <h2 class = "elementTitle">Zile disponibile</h2>
                <h3 class = "elementTitleSubText">pentru concedii medicale</h3>
            </div>

            <div class = "holidayDisplayElement">
                <h1 class = "dayDisplay cereriDisplay">-</h1>
                <img src = "../resources/vacationIcons/pending.png">
                <h2 class = "elementTitle">Cereri in asteptare</h2>
                <h3 class = "elementTitleSubText">se asteapta decizia managerului</h3>
            </div>

            <div class = "holidayDisplayElement">
                <h1 class = "dayDisplay">21</h1>
                <img src = "../resources/vacationIcons/totalDays.png">
                <h2 class = "elementTitle">Zile totale</h2>
                <h3 class = "elementTitleSubText">per an</h3>
            </div>
        </div>
        
        <div class = "bolder2">
            <div class = "bolderElement">
                <div class = "vacationSelector">
                    <h1>De la:</h1>
                    <input class = "calendar" type="date" id="startDatePicker" name="datePicker" 
                    min="2023-01-01" max="2025-12-31">
                </div>

                <div class = "vacationSelector">
                    <h1>Pana la:</h1>
                    <input class = "calendar" type="date" id="endDatePicker" name="datePicker" 
                    min="2023-01-01" max="2025-12-31">
                </div>
            </div>

            <div class="verticalLine"></div>

            <div class = "bolderElement">
                <div class = "vacationSelector">
                    <h1>Mail inlocuitor:</h1>
                    <input class = "mailReplacer mr1" type="text" placeholder="example@dezzinex.com">
                </div>

                <div class = "vacationSelector">
                    <h1>Telefon urgenta:</h1>
                    <input class = "mailReplacer mr2" type="text" placeholder="07 n-am cartela">
                </div>
            </div>

            <div class="verticalLine"></div>

            <div class = "bolderElement">
                <div class = "vacationSelector">
                    <h1>Tip de concediu:</h1>
                    <select id = "concediuSelector" class = "dropdown dd2">
                        <option value="" disabled selected>Alege tipul de concediu</option>
                        <option value="maternal">Concediu maternal</option>
                        <option value="medical">Concediu medical</option>
                        <option value="odihna">Concediu de odihna</option>
                    </select>
                </div>

                <div class = "vacationSelector">
                    <h1>Trimite cererea:</h1>
                    <button class = "trimiteConcediu">Trimite</button>
                </div>
            </div>
        </div>`
    return content
}