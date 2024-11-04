import { excelColToInt, intToExcelCol } from 'excel-column-name'

class useNavigation {
  constructor(cell) {
    this.cellPosition = cell.id.replace('cell_', '')
    this.row = this.cellPosition.replace(/\D/g, '')
    this.column = this.cellPosition.replace(/[0-9]/g, '')
  }

  moveLeft() {
    let previousColumn = excelColToInt(this.column) - 1
    previousColumn = intToExcelCol(previousColumn)
    return document.getElementById('cell_' + previousColumn + this.row).focus()
  }
  moveRight() {
    let nextColumn = excelColToInt(this.column) + 1
    nextColumn = intToExcelCol(nextColumn)
    return document.getElementById('cell_' + nextColumn + this.row).focus()
  }
  moveUp() {
    const previousRow = parseInt(this.row) - 1
    return document.getElementById('cell_' + this.column + previousRow).focus()
  }
  moveDown() {
    const nextRow = parseInt(this.row) + 1
    return document.getElementById('cell_' + this.column + nextRow).focus()
  }
}

export { useNavigation }
