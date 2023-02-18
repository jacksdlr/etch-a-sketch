const button = document.querySelector("button")
button.addEventListener("click", () => {
    let gridSize = prompt("Enter number for new grid height/width:")
    if (gridSize > 100) {
        gridSize = 100
    }
    gridCreator(gridSize)
})

const container = document.querySelector(".grid-container")

randomRGB = () => {
    return Math.floor(Math.random() * (256))
}

gridCreator = (gridSize) => {
    document.querySelectorAll(".square").forEach((square) => {
        square.parentNode.removeChild(square)
    })
    container.setAttribute("style", `display: grid;grid-template-columns: repeat(${gridSize}, 1fr);grid-template-rows: repeat(${gridSize}, 1fr);justify-content: center;height: 960px;width: 960px;align-content: center;`)

    for (let i = 0; i < gridSize * gridSize; i++) {
        const square = document.createElement("div")
        square.classList.add("square")
        container.appendChild(square)

    }
    // set color of square to dark red when mouse hovers over it
    const squares = document.querySelectorAll(".square")
    squares.forEach((square) => {
        square.addEventListener("mouseover", () => {
            if (!square.hasAttribute("style")) {
                square.setAttribute("style", `background-color: rgb(${randomRGB()}, ${randomRGB()}, ${randomRGB()})`)
            } 
        })
    })
}

gridCreator(16)

