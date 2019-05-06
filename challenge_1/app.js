const button = document.getElementById('button');
const squareOne = document.getElementById('one');
const squareTwo = document.getElementById('two');
const squareThree = document.getElementById('three');
const squareFour = document.getElementById('four');
const squareFive = document.getElementById('five');
const squareSix = document.getElementById('six');
const squareSeven = document.getElementById('seven');
const squareEight = document.getElementById('eight');
const squareNine = document.getElementById('nine');
const table = document.getElementById('table');

// update to find state of board
let boardState = 
        [ null, null, null,
          null, null, null,
          null, null, null ];

button.addEventListener("click", () => {
    squareOne.innerHTML = '';
    squareTwo.innerHTML = '';
    squareThree.innerHTML = '';
    squareFour.innerHTML = '';
    squareFive.innerHTML = '';
    squareSix.innerHTML = '';
    squareSeven.innerHTML = '';
    squareEight.innerHTML = '';
    squareNine.innerHTML = '';
    boardState = [ null, null, null, null, null, null, null, null, null ];
})

// Switch Answers from X to O
let prevAnswer = "";

// X Win Conditions
const winConditions = () => {

    // Row win conditions for 'X'
    if((boardState[0] === 'X' && boardState[1] === 'X' && boardState[2] === 'X') 
    || ((boardState[3] === 'X' && boardState[4] === 'X' && boardState[5] === 'X')) 
    || ((boardState[6] === 'X' && boardState[7] === 'X' && boardState[8] === 'X'))

    // Columns win conditions for 'X'
    || ((boardState[0] === 'X' && boardState[3] === 'X' && boardState[6] === 'X'))
    || ((boardState[1] === 'X' && boardState[4] === 'X' && boardState[7] === 'X'))
    || ((boardState[2] === 'X' && boardState[5] === 'X' && boardState[8] === 'X'))
    
    // diagonal wins for 'X'
    || ((boardState[0] === 'X' && boardState[4] === 'X' && boardState[8] === 'X'))
    || ((boardState[2] === 'X' && boardState[4] === 'X' && boardState[6] === 'X'))) {

        setTimeout(() => alert('X WINS'), 100);

    // Row win conditions for 'O'
    } else if((boardState[0] === 'O' && boardState[1] === 'O' && boardState[2] === 'O') 
    || ((boardState[3] === 'O' && boardState[4] === 'O' && boardState[5] === 'O')) 
    || ((boardState[6] === 'O' && boardState[7] === 'O' && boardState[8] === 'O'))

    // Columns win conditions for 'O'
    || ((boardState[0] === 'O' && boardState[3] === 'O' && boardState[6] === 'O'))
    || ((boardState[1] === 'O' && boardState[4] === 'O' && boardState[7] === 'O'))
    || ((boardState[2] === 'O' && boardState[5] === 'O' && boardState[8] === 'O'))

    // diagonal wins for 'O'
    || ((boardState[0] === 'O' && boardState[4] === 'O' && boardState[8] === 'O'))
    || ((boardState[2] === 'O' && boardState[4] === 'O' && boardState[6] === 'O'))) {

        setTimeout(() => alert('0 WINS'), 100);
    } 
}

squareOne.addEventListener("click", () => {
    if (prevAnswer === "" || prevAnswer === "O") {
        squareOne.innerHTML = "X";
        boardState[0] = 'X';
        prevAnswer = 'X';
    } else {
        squareOne.innerHTML = "O";
        boardState[0] = 'O';
        prevAnswer = 'O';
    }
    winConditions();
})

squareTwo.addEventListener("click", () => {
    if (prevAnswer === "" || prevAnswer === "O") {
        squareTwo.innerHTML = "X";
        boardState[1] = 'X';
        prevAnswer = 'X';
    } else {
        squareTwo.innerHTML = "O";
        boardState[1] = 'O';
        prevAnswer = 'O';
    }
    winConditions();
})

squareThree.addEventListener("click", () => {
    if (prevAnswer === "" || prevAnswer === "O") {
        squareThree.innerHTML = "X";
        boardState[2] = 'X';
        prevAnswer = 'X';
    } else {
        squareThree.innerHTML = "O";
        boardState[2] = 'O';
        prevAnswer = 'O';
    }
    winConditions();
})

squareFour.addEventListener("click", () => {
    if (prevAnswer === "" || prevAnswer === "O") {
        squareFour.innerHTML = "X";
        boardState[3] = 'X';
        prevAnswer = 'X';
    } else {
        squareFour.innerHTML = "O";
        boardState[3] = 'O';
        prevAnswer = 'O';
    }
    winConditions();
})

squareFive.addEventListener("click", () => {
    if (prevAnswer === "" || prevAnswer === "O") {
        squareFive.innerHTML = "X";
        boardState[4] = 'X';
        prevAnswer = 'X';
    } else {
        squareFive.innerHTML = "O";
        boardState[4] = 'O';
        prevAnswer = 'O';
    }
    winConditions();
})

squareSix.addEventListener("click", () => {
    if (prevAnswer === "" || prevAnswer === "O") {
        squareSix.innerHTML = "X";
        boardState[5] = 'X';
        prevAnswer = 'X';
    } else {
        squareSix.innerHTML = "O";
        boardState[5] = 'X';
        prevAnswer = 'O';
    }
    winConditions();
})

squareSeven.addEventListener("click", () => {
    if (prevAnswer === "" || prevAnswer === "O") {
        squareSeven.innerHTML = "X";
        boardState[6] = 'X';
        prevAnswer = 'X';
    } else {
        squareSeven.innerHTML = "O";
        boardState[6] = 'O';
        prevAnswer = 'O';
    }
    winConditions();
})

squareEight.addEventListener("click", () => {
    if (prevAnswer === "" || prevAnswer === "O") {
        squareEight.innerHTML = "X";
        boardState[7] = 'X';
        prevAnswer = 'X';
    } else {
        squareEight.innerHTML = "O";
        boardState[7] = 'O';
        prevAnswer = 'O';
    }
    winConditions();
})

squareNine.addEventListener("click", () => {
    if (prevAnswer === "" || prevAnswer === "O") {
        squareNine.innerHTML = "X";
        boardState[8] = 'X';
        prevAnswer = 'X';
    } else {
        squareNine.innerHTML = "O";
        boardState[8] = 'O';
        prevAnswer = 'O';
    }
    winConditions();
})

