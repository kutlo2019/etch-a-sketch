function createGrid(grid, size) {
    grid.innerHTML = "";
    for (let i = 0; i < size * size; i++) {
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('.grid-square');
        gridSquare.addEventListener('mouseover', e => {
            e.target.style.backgroundColor = 'aqua';
        });
        grid.appendChild(gridSquare)
    }
}

const grid = document.querySelector('.grid');

createGrid(grid, 16);

const screenSizer = document.getElementById('screen-size');
screenSizer.addEventListener('click', e => {
    let size = prompt("Please enter the desired screen size (less that 100 width)");
    size = parseInt(size);
    if (size > 100) {
        size = 100;
    }

});