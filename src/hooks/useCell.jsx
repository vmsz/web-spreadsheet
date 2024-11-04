import { useNavigation } from './useNavigation'

class useCell {
  constructor(event) {
    this.event = event
    this.keyPressed = event.key
    this.shiftPressed = event.shiftKey
    this.cell = event.target
    this.isOnCellMode = event.target.readOnly
  }

  selectCell() {
    if (this.isOnCellMode) {
      this.cell.readOnly = false
      this.cell.style.cursor = 'text'
      return this.cell.setSelectionRange(999999, 999999)
    }
    return
  }

  deselectCell() {
    this.cell.readOnly = true
    return (this.cell.style.cursor = 'cell')
  }

  handleKeyDown() {
    if (this.shiftPressed && this.keyPressed == 'Tab') {
      this.event.preventDefault()
      return new useNavigation(this.cell).moveLeft()
    }
    if (this.keyPressed == 'Tab') {
      this.event.preventDefault()
      return new useNavigation(this.cell).moveRight()
    }
    if (this.shiftPressed && this.keyPressed == 'Enter') {
      this.event.preventDefault()
      return new useNavigation(this.cell).moveUp()
    }
    if (this.keyPressed == 'Enter') {
      this.event.preventDefault()
      return new useNavigation(this.cell).moveDown()
    }

    if (this.isOnCellMode) {
      if (this.keyPressed == 'ArrowLeft')
        return new useNavigation(this.cell).moveLeft()
      if (this.keyPressed == 'ArrowUp')
        return new useNavigation(this.cell).moveUp()
      if (this.keyPressed == 'ArrowRight')
        return new useNavigation(this.cell).moveRight()
      if (this.keyPressed == 'ArrowDown')
        return new useNavigation(this.cell).moveDown()
      if (this.keyPressed == 'Delete') {
        return (this.cell.value = '')
      }
      if (this.keyPressed == 'Backspace') {
        this.cell.value = ''
        return this.selectCell()
      }
    }
  }
}

export { useCell }
