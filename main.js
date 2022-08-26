window.onload = function() {
    for (let index = 0; index < 10; index++) {
        const column = document.createElement("div");
        column.setAttribute("id","column");
        for (let row = 0; row < 2; row++) {
            const field = document.createElement("div");
            field.setAttribute("id","field");
            field.setAttribute("name", "i"+index+"r"+row);
            field.setAttribute("onClick","changeCircle('i"+index+"r"+row+"')");
            const circle = document.createElement("div");
            circle.setAttribute("id","circle");
            field.appendChild(circle);
            column.appendChild(field); 
        }
        document.getElementById("board").appendChild(column);
    }
}

function changeCircle(id) {
    const fields = document.getElementsByName(id);
    const circle = fields[0].firstChild;
    let color = window.getComputedStyle(circle).backgroundColor;
    console.log("color: " + color);
    switch (color) {
        case "rgb(255, 255, 255)":
            circle.style.background="rgb(30, 144, 255)"
            break;
        case "rgb(30, 144, 255)":
            circle.style.background="rgb(220, 20, 60)"
            break;
        default:
            circle.style.background="rgb(255, 255, 255)"
            break;
    }
}