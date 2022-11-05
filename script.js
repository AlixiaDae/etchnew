const container = document.querySelector('.grid-container')

const gridWrapper = document.createElement('div')

gridWrapper.classList.add('grid-wrapper')
container.appendChild(gridWrapper)

function grid(size) {
    gridWrapper.style.gridTemplate = `repeat(${size},1fr)/repeat(${size},1fr)`
    for(let i = 0; i < (size*size); i++) {
        const cell = document.createElement('div')
        cell.classList.add('cell')
        cell.addEventListener('mouseover',mode)

        gridWrapper.appendChild(cell)
    }
}

function clearGrid() {
    gridWrapper.textContent = ''
}

function mode(cell) {
    if(eraseMode == true) {
        cell.target.style.backgroundColor = 'whitesmoke'
    } else {
        cell.target.style.backgroundColor = 'black'
    }
}

function clear() {
    clearGrid()
    grid(cellNumber)
}

const modeBtns = document.querySelectorAll('button')
let drawMode = true;
let eraseMode = false;

modeBtns.forEach(btn => {
    btn.addEventListener('click', () =>{
        if(btn.textContent == 'Erase') {
            drawMode = false;
            eraseMode = true;
        } else if(btn.textContent == 'Draw'){
            drawMode = true;
            eraseMode = false;
        } else if(btn.textContent == 'Clear') {
            clear()
        }
    })
})

const newSizeBtn = document.querySelector('.new-size')

newSizeBtn.addEventListener('click', () => {
    clearGrid()
    let number = prompt('Please enter a value between 16 and 100')
    cellNumber = number
    grid(cellNumber)
})

let cellNumber= 16

grid(cellNumber)