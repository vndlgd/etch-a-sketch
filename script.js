function createGrid(number) {
    // set border when we create Grid to show users where to sketch
    document.getElementById("grid").style.border = "4px solid black";

    // create nxn grid of squares
    number *= number

    for (let i = 0; i < number; i++) {
        createSquare();
    }

    // change square color when mouse passes over them
    document.getElementById('grid').addEventListener("mouseover", function (e) {
        if (e.target.classList.contains('square')) {
            e.target.style.backgroundColor = 'black';
        }
    });
}

function createSquare() {
    const square = document.createElement('div');
    square.classList.add('square') // give square div class name 'square'
    square.style.backgroundColor = 'white'; // always set square color to white
    // dynamically resize each square's height and width 
    square.style.height = (960 / userInput) + 'px';
    square.style.width = (960 / userInput) + 'px';
    grid.appendChild(square);
}

// function for user to press button to define grid size
function getGridSize() {
    do {
        userInput = prompt("Type in a number no greater than 100");
    } while (userInput > 100);

    // clear grid 
    removeAllSquares(grid);
    createGrid(userInput);
}

function removeAllSquares(grid) {
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
}

let userInput = ""; // store user's grid size value here (n x n)
const grid = document.querySelector('#grid');
// initially hide border when we first open page
grid.style.border = 'none';