/* eslint-disable react/jsx-key */

const Rows = props => {
  let rowQuantity = []

  for (let i = 0; i < props.rowQuantity; i++) {
    rowQuantity.push(i)
  }

  return (
    <div>
      {rowQuantity.map(row => {
        row++
        return (
          <span
            id={`row_${row}`}
            className='border-primary flex h-6 w-10 items-center justify-center border-b border-solid bg-secondary text-sm font-bold'
          >
            {row}
          </span>
        )
      })}
    </div>
  )
}

export { Rows }
