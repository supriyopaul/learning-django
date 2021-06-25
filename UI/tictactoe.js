function restart() {
    var cells = document.getElementsByTagName("td");
    var arrayLength = cells.length;
    for (var i = 0; i < arrayLength; i++) {
        cells[i].textContent = "";
    }
}

function tdclick(cellid) {
    var cell = document.getElementById(cellid);
    if(cell.textContent === "") {
        cell.textContent = "X";
    }
    else if(cell.textContent === "X") {
        cell.textContent = "O";
    }
    else if(cell.textContent === "O") { 
        cell.textContent = "";
    }
}

restart();
