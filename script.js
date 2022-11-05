const defaultGridNumbers = {col: 16, row:16}


const gridWrapper = document.createElement('div')

gridWrapper.classList.add('grid-wrapper')
document.body.appendChild(gridWrapper)

const defaultGrid = (n) => {
    for (let i = 0; i < (n.col * n.row); i++) {
        const gridCell = document.createElement('div')
        gridCell.classList.add('cell')
        gridWrapper.appendChild(gridCell)
    }
}

defaultGrid(defaultGridNumbers)