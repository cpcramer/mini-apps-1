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

squareOne.addEventListener("click", () => {
    squareOne.innerHTML = "X";
})

squareTwo.addEventListener("click", () => {
    squareTwo.innerHTML = "X";
})

squareThree.addEventListener("click", () => {
    squareThree.innerHTML = "X";
})

squareFour.addEventListener("click", () => {
    squareFour.innerHTML = "X";
})

squareFive.addEventListener("click", () => {
    squareFive.innerHTML = "X";
})

squareSix.addEventListener("click", () => {
    squareSix.innerHTML = "X";
})

squareSeven.addEventListener("click", () => {
    squareSeven.innerHTML = "X";
})

squareEight.addEventListener("click", () => {
    squareEight.innerHTML = "X";
})

squareNine.addEventListener("click", () => {
    squareNine.innerHTML = "X";
})

