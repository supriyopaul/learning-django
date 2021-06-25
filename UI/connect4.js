var turn = "player1";
var player1Name = "";
var player2Name = "";

$("#submitNames").click(function() {
    player1Name = $(this).closest("form").find("#player1name").val() || "Player1";
    player2Name = $(this).closest("form").find("#player2name").val() || "Player2";
    $("#turnTeller").text(player1Name + "'s turn");
    executeTurn();
})


var cellIds = $(".dot").map(function() {
    return this.id;
    }).get();

function executeTurn() {
    for (i = 0; i < cellIds.length; ++i) {
        if(cellIds[i].slice(-2)[0] === "0") {
            $('#' + cellIds[i]).click(function() {
                let cellId = $(this).attr('id');
                let cellToColor = getBottomNode(cellId)
                console.log("cell to color: " + cellToColor);
                assignNodeToPlayer(cellToColor);
                if(checkForWin()){
                    console.log("win");
                }
            })
        }
        else {
            break;
        }
    }
}

function assignNodeToPlayer(cellId){
    $(cellId).addClass(turn);
    turn = (turn === "player1" ? "player2" : "player1");
    if(turn === "player1"){
        $("#turnTeller").text(player1Name + "'s turn");
        $("#turnTeller").css('color', '#F94144');
    }
    else {
        $("#turnTeller").text(player2Name + "'s turn");
        $("#turnTeller").css('color', '#43AA8B');
    }
}

function getBottomNode(cellClicked) {
    for(row = 0; row <= ($("tr").length - 1); ++row) {
        //debugger;
        let column = cellClicked.slice(-1);
        var cellId = "#cell" + row + column;
        if ($(cellId).hasClass('player1') || $(cellId).hasClass('player2')) {
            return "#cell" + (row - 1) + column;
        }
    }
    return cellId;
}

function checkForWin() {
    if ($("." + turn).length < 3){
        return false;
    }
    else {
        dots = $("." + turn);
        if (dots.each(checkVertically)){
            return true;
        }
        if (dots.each(checkDiagonally)){
            return true;
        }
        if (dots.each(checkHorizontally)) {
            return true;
        }
        else {
            return false;
        }
    }
    
}

function checkVertically(index, item){
    let playerClass = turn;
    var connected = 1;
    let itemID = '#' + item.id;
    let itemRow = itemID.slice(-2)[0]
    let itemCol = itemID.slice(-2)[1]
    for(i = 1; i < 4; i++) {
        if($("#cell" + (itemRow+i) + itemCol).hasClass(playerClass)) {
            connected + 1;
            continue;
        }
        else {
            break;
        }
    }
    if(connected === 4){
        return true;
    }
    return false;
}

function checkHorizontally(index, item){
    let playerClass = turn;
    var connected = 1;
    let itemID = '#' + item.id;
    let itemRow = itemID.slice(-2)[0]
    let itemCol = itemID.slice(-2)[1]
    for(i = 1; i < 4; i++) {
        if($("#cell" + itemRow + (itemCol+i)).hasClass(playerClass)) {
            connected + 1;
            continue;
        }
        else {
            break;
        }
    }
    if(connected === 4){
        return true;
    }
    return false;
}

function checkDiagonally(index, item){
    let playerClass = turn;
    var connected = 1;
    let itemID = '#' + item.id;
    let itemRow = itemID.slice(-2)[0]
    let itemCol = itemID.slice(-2)[1]
    for(i = 1; i < 4; i++) {
        if($("#cell" + (itemRow+i) + (itemCol+i)).hasClass(playerClass)) {
            connected + 1;
            continue;
        }
        else {
            break;
        }
    }
    if(connected === 4){
        return true;
    }
    return false;
}


