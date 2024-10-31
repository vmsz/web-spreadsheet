import {
  selectCell,
  deselectCell,
  deleteCellContent,
  deleteCharacter,
  moveLeft,
  moveUp,
  moveRight,
  moveDown,
} from '../hooks/useCell'

const Cell = props => {
  return (
    <input
      onKeyDown={event => {
        const cellMode = event.target.readOnly
        const keyPressed = event.key
        const shiftPressed = event.shiftKey

        if (shiftPressed && keyPressed == 'Tab') return moveLeft(event)
        if (shiftPressed && keyPressed == 'Enter') return moveUp(event)
        if (keyPressed == 'Tab') return moveRight(event)
        if (keyPressed == 'Enter') return moveDown(event)

        if (cellMode) {
          if (keyPressed == 'ArrowLeft') return moveLeft(event)
          if (keyPressed == 'ArrowUp') return moveUp(event)
          if (keyPressed == 'ArrowRight') return moveRight(event)
          if (keyPressed == 'ArrowDown') return moveDown(event)
          if (keyPressed == 'Delete') return deleteCellContent(event)
        }
        if (!cellMode) {
          if (keyPressed == 'Delete') return deleteCharacter(event)
        }
      }}
      onDoubleClick={event => {
        selectCell(event)
      }}
      onBlur={event => {
        deselectCell(event)
      }}
      type='text'
      id={props.id}
      spellCheck={false}
      readOnly={true}
      defaultValue={props.children}
      placeholder={props.placeholder}
      className='h-6 w-20 cursor-cell border-b border-r border-solid border-primary bg-primary text-center text-xs font-bold placeholder:font-normal placeholder:text-placeholder hover:bg-secondary focus:border-2 focus:border-secondary focus:bg-secondary'
    />
  )
}

export { Cell }
