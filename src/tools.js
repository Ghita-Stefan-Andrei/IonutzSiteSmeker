function getTitle(title)
{
    return `<h1 class="contentTitle">${title}</h1>`;
}

function getCurrentMonthInRomanian() {
    const months = [
        "Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie",
        "Iulie", "August", "Septembrie", "Octombrie", "Noiembrie", "Decembrie"
    ];
    const currentMonthIndex = new Date().getMonth();
    return months[currentMonthIndex];
}

function recalculateTotals() {
    for (let col = 1; col <= 31; col++) {
        let total = 0;
        for (let row = 1; row <= 2; row++) {
            const input = document.querySelector(`.row-${row}-col-${col} input`);
            if (input && input.value) {
                total += parseFloat(input.value) || 0;
            }
        }
        const totalCell = document.querySelector(`.row-3-col-${col}`);
        if (totalCell) {
            totalCell.textContent = total;
        }
    }
}

function populateRows(workedR, workedO, leave) {
    leave.forEach((colIndex) => {
        const cell = document.querySelector(`.row-4-col-${colIndex}`);
        if (cell) {
            cell.classList.add('anualLeave');
        }
    });

    workedR.forEach((value, index) => {
        const input = document.querySelector(`.row-1-col-${index + 1}-input`);
        const leaveCell = document.querySelector(`.row-4-col-${index + 1}`);
        if (input && !leaveCell.classList.contains('anualLeave')) {
            input.value = value; 
        }
    });

    workedO.forEach((value, index) => {
        const input = document.querySelector(`.row-2-col-${index + 1}-input`);
        const leaveCell = document.querySelector(`.row-4-col-${index + 1}`);
        if (input && !leaveCell.classList.contains('anualLeave')) {
            input.value = value; 
        }
    });
}

function getMonthDetails(year, month) {
    const daysInMonth = new Date(year, month, 0).getDate(); // Obține numărul de zile în lună
    const weekends = [];
    const weekdays = [];

    for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(year, month - 1, day);
        const dayOfWeek = date.getDay(); // 0 = Duminică, 6 = Sâmbătă

        if (dayOfWeek === 0 || dayOfWeek === 6) {
            weekends.push(day);
        } else {
            weekdays.push(day);
        }
    }

    return {
        daysInMonth,
        weekends,
        weekdays
    };
}

const luni = {
    "Ianuarie": 1,
    "Februarie": 2,
    "Martie": 3,
    "Aprilie": 4,
    "Mai": 5,
    "Iunie": 6,
    "Iulie": 7,
    "August": 8,
    "Septembrie": 9,
    "Octombrie": 10,
    "Noiembrie": 11,
    "Decembrie": 12
  };

function generateGrid(data, month) {
    const getDaysInMonth = (month) => {
        const date = new Date(2025, month, 0);
        return date.getDate();
    };
    const daysInMonth = getDaysInMonth(month);
    const columns = daysInMonth + 1;

    const container = document.querySelector('.grid-container');
    container.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
    container.innerHTML = '';

    const firstEmptyDiv = document.createElement('div');
    firstEmptyDiv.className = 'grid-item-default grid-head grid-name';
    container.appendChild(firstEmptyDiv);

    for (let day = 1; day <= daysInMonth; day++) {
        const dayDiv = document.createElement('div');
        dayDiv.className = 'grid-item-default grid-head';
        dayDiv.textContent = day;
        container.appendChild(dayDiv);
    }

    const rows = data.length;
    for (let i = 0; i < rows; i++) {
        const nameDiv = document.createElement('div');
        nameDiv.className = 'grid-item-default grid-name';
        nameDiv.textContent = data[i].name;
        container.appendChild(nameDiv);

        const dates = data[i].dates;

        for (let j = 1; j <= daysInMonth; j++) {
            const dateDiv = document.createElement('div');
            dateDiv.className = 'grid-item-default';

            if (dates.includes(j)) {
                const index = dates.indexOf(j);

                if (index === 0 || dates[index - 1] !== j - 1) {
                    dateDiv.classList.add('grid-item-left');
                }

                if (index === dates.length - 1 || dates[index + 1] !== j + 1) {
                    dateDiv.classList.add('grid-item-right');
                }

                if (index > 0 && index < dates.length - 1 && dates[index - 1] === j - 1 && dates[index + 1] === j + 1) {
                    dateDiv.classList.add('grid-item-middle');
                }
            }
            container.appendChild(dateDiv);
        }
    }
}