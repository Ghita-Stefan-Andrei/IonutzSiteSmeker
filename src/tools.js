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