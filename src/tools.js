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