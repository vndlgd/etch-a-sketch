function createGrid(number) {
    // create 16x16 grid of squares
    number *= number
    for (let i = 0; i < number; i++) {
        createSquare();
    }
}

function createSquare() {
    // define grid of squares and each square inside
    const grid = document.querySelector('#grid');
    const square = document.createElement('div');
    square.classList.add('square') // give square div class name 'square'

    square.style.width = '50px';
    square.style.height = '50px';
    square.style.border = "solid black";

    grid.appendChild(square);
}

createGrid(16);