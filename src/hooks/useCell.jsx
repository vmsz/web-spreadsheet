import { excelColToInt, intToExcelCol } from 'excel-column-name'

const selectCell = event => {
  event.target.readOnly = false
  event.target.style.cursor = 'text'
  return event.target.setSelectionRange(999999, 999999)
}

const deselectCell = event => {
  event.target.readOnly = true
  return (event.target.style.cursor = 'cell')
}

const deleteCellContent = event => {
  return (event.target.value = '')
}

const deleteCharacter = event => {
  if (window.getSelection() == '') {
    return (event.target.value = event.target.value.slice(0, -1))
  }
  return
}

const moveLeft = event => {
  event.preventDefault()
  let cellPosition = event.target.id.replace('cell_', '')
  let [column, row] = cellPosition.match(/\D+|\d+/g)
  column = excelColToInt(column)
  column = column - 1
  column = intToExcelCol(column)
  const topCell = 'cell_' + column + row
  return document.getElementById(topCell).focus()
}

const moveUp = event => {
  event.preventDefault()
  let cellPosition = event.target.id.replace('cell_', '')
  let [column, row] = cellPosition.match(/\D+|\d+/g)
  const topCell = 'cell_' + column + (row - 1)
  return document.getElementById(topCell).focus()
}

const moveRight = event => {
  event.preventDefault()
  let cellPosition = event.target.id.replace('cell_', '')
  let [column, row] = cellPosition.match(/\D+|\d+/g)
  column = excelColToInt(column)
  column = column + 1
  column = intToExcelCol(column)
  const topCell = 'cell_' + column + row
  return document.getElementById(topCell).focus()
}

const moveDown = event => {
  event.preventDefault()
  let cellPosition = event.target.id.replace('cell_', '')
  let [column, row] = cellPosition.match(/\D+|\d+/g)
  row = parseInt(row)
  const bottomCell = 'cell_' + column + (row + 1)
  return document.getElementById(bottomCell).focus()
}

export {
  selectCell,
  deselectCell,
  deleteCellContent,
  deleteCharacter,
  moveLeft,
  moveUp,
  moveRight,
  moveDown,
}
