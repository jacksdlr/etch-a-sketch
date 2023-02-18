const container = document.querySelector(".grid-container")

// add a grid of 16 x 16 divs
for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        const square = document.createElement("div")
        square.classList.add("square")
        container.appendChild(square)
    }
}

// set color of square to dark red when mouse hovers over it
const squares = document.querySelectorAll(".square")
squares.forEach((square) => {
    square.addEventListener("mouseover", () => {
        square.setAttribute("style", "background-color: darkred")
    })
})