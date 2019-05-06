let button = document.getElementById('button');
let squareOne = document.getElementById('one');
let squareTwo = document.getElementById('two');
let squareThree = document.getElementById('three');
let squareFour = document.getElementById('four');
let squareFive = document.getElementById('five');
let squareSix = document.getElementById('six');
let squareSeven = document.getElementById('seven');
let squareEight = document.getElementById('eight');
let squareNine = document.getElementById('nine');
let clone = document.getElementById('table');

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
})

let prevAnswer = "";

squareOne.addEventListener("click", () => {
    if (prevAnswer === "" || prevAnswer === "O") {
        squareOne.innerHTML = "X";
        prevAnswer = 'X';
    } else {
        squareOne.innerHTML = "O";
        prevAnswer = 'O';
    }
})

squareTwo.addEventListener("click", () => {
    if (prevAnswer === "" || prevAnswer === "O") {
        squareTwo.innerHTML = "X";
        prevAnswer = 'X';
    } else {
        squareTwo.innerHTML = "O";
        prevAnswer = 'O';
    }
})

squareThree.addEventListener("click", () => {
    if (prevAnswer === "" || prevAnswer === "O") {
        squareThree.innerHTML = "X";
        prevAnswer = 'X';
    } else {
        squareThree.innerHTML = "O";
        prevAnswer = 'O';
    }
})

squareFour.addEventListener("click", () => {
    if (prevAnswer === "" || prevAnswer === "O") {
        squareFour.innerHTML = "X";
        prevAnswer = 'X';
    } else {
        squareFour.innerHTML = "O";
        prevAnswer = 'O';
    }
})

squareFive.addEventListener("click", () => {
    if (prevAnswer === "" || prevAnswer === "O") {
        squareFive.innerHTML = "X";
        prevAnswer = 'X';
    } else {
        squareFive.innerHTML = "O";
        prevAnswer = 'O';
    }
})

squareSix.addEventListener("click", () => {
    if (prevAnswer === "" || prevAnswer === "O") {
        squareSix.innerHTML = "X";
        prevAnswer = 'X';
    } else {
        squareSix.innerHTML = "O";
        prevAnswer = 'O';
    }
})

squareSeven.addEventListener("click", () => {
    if (prevAnswer === "" || prevAnswer === "O") {
        squareSeven.innerHTML = "X";
        prevAnswer = 'X';
    } else {
        squareSeven.innerHTML = "O";
        prevAnswer = 'O';
    }
})

squareEight.addEventListener("click", () => {
    if (prevAnswer === "" || prevAnswer === "O") {
        squareEight.innerHTML = "X";
        prevAnswer = 'X';
    } else {
        squareEight.innerHTML = "O";
        prevAnswer = 'O';
    }
})

squareNine.addEventListener("click", () => {
    if (prevAnswer === "" || prevAnswer === "O") {
        squareNine.innerHTML = "X";
        prevAnswer = 'X';
    } else {
        squareNine.innerHTML = "O";
        prevAnswer = 'O';
    }
})

