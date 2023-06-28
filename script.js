function createGrid(number) {
    // create 16x16 grid of squares
    number *= number
    for (let i = 0; i < number; i++) {
        createSquare();
    }

    // change div color when mouse passes over them
    document.getElementById('grid').addEventListener("mouseover", function (e) {
        e.target.style.backgroundColor = 'black';
    });
}

function createSquare() {
    // define grid of squares and each square inside
    const square = document.createElement('div');
    square.classList.add('square') // give square div class name 'square'

    square.style.width = '50px';
    square.style.height = '50px';
    square.style.border = "solid black";

    grid.appendChild(square);
}

const grid = document.querySelector('#grid');
createGrid(16);

// // change div color when mouse passes over them
// document.getElementById('grid').addEventListener("mouseover", function (e) {
//     e.target.style.color = 'black';
// });