/* eslint-disable react/jsx-key */

import { Cell } from './Cell'
import { intToExcelCol } from 'excel-column-name'

const Columns = props => {
  let rowQuantity = []
  let columnQuantity = []

  for (let i = 0; i < props.rowQuantity; i++) {
    rowQuantity.push(i)
  }
  for (let i = 0; i < props.columnQuantity; i++) {
    columnQuantity.push(i)
  }

  return columnQuantity.map(column => {
    column++
    const columnName = intToExcelCol(column)
    return (
      <div className='flex flex-col' id={`column_${columnName}`}>
        <span className='sticky top-[70px] z-10 flex h-6 w-20 items-center justify-center border-b border-r border-solid border-primary bg-secondary text-sm font-bold'>
          {columnName}
        </span>
        {rowQuantity.map(row => {
          row++
          return (
            <Cell
              placeholder={`${columnName}${row}`}
              id={`cell_${columnName}${row}`}
            ></Cell>
          )
        })}
      </div>
    )
  })
}

export { Columns }
