const gridContainer = document.querySelector(".grid-container");
const resizeButton = document.getElementById("resize-button");

function createGrid(size) {
    while(gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }

    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");
        gridContainer.appendChild(gridItem);
    }
}



function promptForGridSize() {
    const newSize = prompt("Enter the number of squares per side of the new grid");
    if (newSize <= 100) {
        createGrid(newSize);
    }
    else {
        alert('Please input values less than or equal to 100');
    }
}

resizeButton.addEventListener("click", promptForGridSize);

createGrid(16);