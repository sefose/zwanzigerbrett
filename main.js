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
    // 100: {
    //     title: "Hunderterfeld",
    //     rows: 10,
    //     columns: 10,
    // },
};

let currentLayout = "10";
let currentStone = "blue";

const calculateFiveDivMargin = () => {
    return Math.floor(window.innerWidth / 60);
};

const calculateFieldMargin = () => {
    return Math.floor(window.innerWidth / 200);
};

const calculateFieldSize = () => {
    return (
        (window.innerWidth - 2 * 2 - 16 - calculateFiveDivMargin() * 2) / 10 -
        calculateFieldMargin() * 2 -
        2 * 2
    );
};

const createBoard = () => {
    for (
        let column = 0;
        column < layouts[currentLayout].columns + 1;
        column++
    ) {
        const columnDiv = document.createElement("div");
        columnDiv.setAttribute("id", "column");
        const size = calculateFieldSize() + "px";
        const fieldMargin = calculateFieldMargin() + "px";
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
            field.style.margin = fieldMargin;
            if (column == 5) {
                const fiveDiv = document.createElement("div");
                const fiveDivMargin = calculateFiveDivMargin() + "px";
                fiveDiv.setAttribute("class", "fiveDiv");
                fiveDiv.style.margin = fiveDivMargin;
                columnDiv.appendChild(fiveDiv);
            } else {
                columnDiv.appendChild(field);
            }
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


const onresize = () => {
    const size = calculateFieldSize() + "px";
    const fieldMargin = calculateFieldMargin() + "px";
    const fields = document.getElementsByClassName("field");
    for (let index = 0; index < fields.length; index++) {
        const field = fields[index];
        field.style.height = size;
        field.style.width = size;
        field.style.margin = fieldMargin;
    }
    const fiveDivSize = calculateFiveDivMargin() + "px";
    const fiveDivs = document.getElementsByClassName("fiveDiv");
    for (let index = 0; index < fiveDivs.length; index++) {
        const fiveDiv = fiveDivs[index];
        fiveDiv.style.margin = fiveDivSize;
    }
}

window.onload = () => {
    setHeadline();
    populateBoardChooser();
    createBoard();
    onresize();
};

window.addEventListener("resize", onresize);

const changeCircle = (id) => {
    const field = document.getElementsByName(id).item(0);
    switch (currentStone) {
        case "blue":
            field.style.background = "rgb(30, 144, 255)";
            break;
        case "red":
            field.style.background = "rgb(220, 20, 60)";
            break;
        default:
            field.style.background = "rgb(255, 255, 255)";
            break;
    }
}

const pickStone = (color) => {
    currentStone = color
    document.getElementsByClassName("choosen").item(0).classList.remove("choosen")
    document.getElementsByClassName(color).item(0).classList.add("choosen")
}

const getIndexOfKeyFromObject = (key, object) => {
    return Object.keys(object).findIndex((e) => e === key);
}

const switchBoard = (direction) => {
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
