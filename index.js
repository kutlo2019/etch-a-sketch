// Create 16 x 16 square divs and add to .grid
const grid = document.querySelector('.grid');

for (let i = 0; i < 256; i++) {
    const gridSquare = document.createElement('div');
    gridSquare.classList.add('.grid-square');
    gridSquare.addEventListener('mouseover', e => {
        e.target.style.backgroundColor = 'aqua';
    });
    grid.appendChild(gridSquare)
}