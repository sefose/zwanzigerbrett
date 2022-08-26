window.onload = function() {
    for (let index = 0; index < 10; index++) {
        const column = document.createElement("div");
        column.setAttribute("id","column");
        const size = (window.innerWidth-2*4-10*4-12)/10+"px"
        for (let row = 0; row < 2; row++) {
            const field = document.createElement("div");
            field.setAttribute("class","field");
            field.setAttribute("name", "i"+index+"r"+row);
            field.setAttribute("onClick","changeCircle('i"+index+"r"+row+"')");
            field.style.height = size;
            field.style.width = size;
            const circle = document.createElement("div");
            circle.setAttribute("class","circle");
            circle.style.height = size;
            circle.style.width = size;
            field.appendChild(circle);
            column.appendChild(field); 
        }
        document.getElementById("board").appendChild(column);
    }
}

window.addEventListener("resize", onresize);

function onresize () {
    const size = (window.innerWidth-2*4-10*4-12)/10+"px"
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
            circle.style.background="rgb(30, 144, 255)";
            break;
        case "rgb(30, 144, 255)":
            circle.style.background="rgb(220, 20, 60)";
            break;
        default:
            circle.style.background="rgb(255, 255, 255)";
            break;
    }
}