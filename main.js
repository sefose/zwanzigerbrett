const layouts = {
    10: {
        title: "Zehnerfeld",
        rows: 1,
        columns: 10,
    },
    20: {
        title: "Zwanzigerfeld",
        rows: 2,
        columns: 10,
    },
    // "100" : {
    //     "title": "Hunderterfeld",
    //     "rows": 10,
    //     "columns": 10,
    // },
};

let currentLayout = "10";

const createBoard = () => {
    for (let column = 0; column < layouts[currentLayout].columns; column++) {
        const columnDiv = document.createElement("div");
        columnDiv.setAttribute("id", "column");
        const size = (window.innerWidth - 2 * 4 - 10 * 4 - 12) / 10 + "px";
        for (let row = 0; row < layouts[currentLayout].rows; row++) {
            const field = document.createElement("div");
            field.setAttribute("class", "field");
            field.setAttribute("name", "c" + column + "r" + row);
            field.setAttribute(
                "onClick",
                "changeCircle('c" + column + "r" + row + "')"
            );
            field.style.height = size;
            field.style.width = size;
            const circle = document.createElement("div");
            circle.setAttribute("class", "circle");
            circle.style.height = size;
            circle.style.width = size;
            field.appendChild(circle);
            columnDiv.appendChild(field);
        }
        document.getElementById("board").appendChild(columnDiv);
    }
    document.title = layouts[currentLayout].title;
};

const clearBoard = () => {
    document.getElementById("board").replaceChildren();
};

const populateBoardChooser = () => {
    for (const layout in layouts) {
        entry = document.createElement("div");
        entry.setAttribute("onClick", "changeBoard('" + layout + "')");
        text = document.createElement("h1");
        text.innerHTML = layouts[layout].title;
        entry.appendChild(text);
        document.getElementById("boardChooser").appendChild(entry);
    }
};

const setHeadline = () => {
    document.getElementById("headline").innerHTML =
        "<h1>" + layouts[currentLayout].title + "<h1>";
};

window.onload = function () {
    setHeadline();
    populateBoardChooser();
    createBoard();
};

window.addEventListener("resize", onresize);

function onresize() {
    const size = (window.innerWidth - 2 * 4 - 10 * 4 - 12) / 10 + "px";
    const fields = document.getElementsByClassName("field");
    for (let index = 0; index < fields.length; index++) {
        const field = fields[index];
        field.style.height = size;
        field.style.width = size;
    }
    const circles = document.getElementsByClassName("circle");
    for (let index = 0; index < circles.length; index++) {
        const ciecle = circles[index];
        ciecle.style.height = size;
        ciecle.style.width = size;
    }
}

function changeCircle(id) {
    const fields = document.getElementsByName(id);
    const circle = fields[0].firstChild;
    let color = window.getComputedStyle(circle).backgroundColor;
    switch (color) {
        case "rgb(255, 255, 255)":
            circle.style.background = "rgb(30, 144, 255)";
            break;
        case "rgb(30, 144, 255)":
            circle.style.background = "rgb(220, 20, 60)";
            break;
        default:
            circle.style.background = "rgb(255, 255, 255)";
            break;
    }
}

function getIndexOfKeyFromObject(key, object) {
    return Object.keys(object).findIndex((e) => e === key);
}

function switchBoard(direction) {
    const currentIndex = getIndexOfKeyFromObject(currentLayout, layouts);
    if (direction == "up") {
    }
}

const openBoardChooser = () => {
    document.getElementById("boardChooser").style.display = "block";
};

const closeBoardChooser = () => {
    document.getElementById("boardChooser").style.display = "none";
};

const changeBoard = (type) => {
    closeBoardChooser();
    currentLayout = type;
    setHeadline();
    clearBoard();
    createBoard();
};
