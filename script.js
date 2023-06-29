function createGrid(number) {
    // set border when we create Grid to show users where to sketch
    const boxSize = 960 / userInput;
    document.getElementById("grid").style.border = "4px solid black";

    // create 16x16 grid of squares
    number *= number

    for (let i = 0; i < number; i++) {
        createSquare();
    }

    // change div color when mouse passes over them
    document.getElementById('grid').addEventListener("mouseover", function (e) {
        if (e.target.classList.contains('square')) {
            e.target.style.backgroundColor = 'black';
        }
    });
}

function createSquare() {
    // define grid of squares and each square inside
    const square = document.createElement('div');
    square.classList.add('square') // give square div class name 'square'
    square.style.backgroundColor = 'white'; // always set square color to white
    square.style.height = (960 / userInput) + 'px';
    square.style.width = (960 / userInput) + 'px';
    grid.appendChild(square);
}

// funciton for user to press button to define grid size
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

let userInput = "";
const grid = document.querySelector('#grid');
// initially hide border when we first open page
grid.style.border = 'none';


// TODO: 
// You should be able to enter 64 and have a brand new 64x64 grid pop 
// up without changing the total amount of pixels used.

// TODO:
// remove gap on grid! 
// How can I make a div not larger than its contents?
// how to make amount of divs inside a container fit content

// grid and square length needs to be updated dynamically with javascript
// actually, only square length, because a 4x4 should make squares bigger
// but keep grid size the same