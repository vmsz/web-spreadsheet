import { useCell } from '../hooks/useCell'

const Cell = props => {
  return (
    <input
      onKeyDown={event => {
        return new useCell(event).handleKeyDown()
      }}
      onDoubleClick={event => {
        return new useCell(event).selectCell()
      }}
      onBlur={event => {
        return new useCell(event).deselectCell()
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
