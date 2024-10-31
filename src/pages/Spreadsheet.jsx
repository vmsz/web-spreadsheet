import { FaPlusCircle } from 'react-icons/fa'
import { FaMinusCircle } from 'react-icons/fa'
import { RiRestartFill } from 'react-icons/ri'
import { ThemeSwitcher } from '../components/ThemeSwitcher'
import { Columns } from '../components/Columns'
import { Rows } from '../components/Rows'
import { useState } from 'react'

const Spreadsheet = () => {
  let [rowQuantity, setRowQuantity] = useState(35)
  let [columnQuantity, setColumnQuantity] = useState(24)

  return (
    <div className='flex h-full w-full flex-col font-Inter text-md text-primary antialiased'>
      <div className='h-[70px] shrink-0'></div>

      <nav className='fixed z-10 flex h-[70px] w-full items-center justify-between bg-tertiary px-4 font-bold text-secondary'>
        <div className='flex gap-7'>
          <div
            className='flex cursor-pointer flex-col items-center gap-1.5 transition-all hover:scale-110 hover:brightness-responsive active:scale-90'
            onClick={() => {
              const cells = document.querySelectorAll('input')
              setRowQuantity(35)
              setColumnQuantity(24)
              window.scrollTo({ top: 0, left: 0 })
              return cells.forEach(cell => {
                cell.value = ''
              })
            }}
          >
            <span>Novo</span>
            <RiRestartFill size={27} />
          </div>

          <div className='flex flex-col items-center gap-2'>
            <span>Linha</span>
            <div className='flex gap-2'>
              <FaMinusCircle
                onClick={() => {
                  if (rowQuantity > 0) {
                    return setRowQuantity(rowQuantity - 1)
                  }
                  return
                }}
                size={22}
                className='cursor-pointer transition-all hover:scale-110 hover:brightness-responsive active:scale-90'
              />
              <FaPlusCircle
                onClick={() => {
                  return setRowQuantity(rowQuantity + 1)
                }}
                size={22}
                className='cursor-pointer transition-all hover:scale-110 hover:brightness-responsive active:scale-90'
              />
            </div>
          </div>

          <div className='flex flex-col items-center gap-2'>
            <span>Coluna</span>
            <div className='flex gap-2'>
              <FaMinusCircle
                onClick={() => {
                  if (columnQuantity > 0) {
                    return setColumnQuantity(columnQuantity - 1)
                  }
                  return
                }}
                size={22}
                className='cursor-pointer transition-all hover:scale-110 hover:brightness-responsive active:scale-90'
              />
              <FaPlusCircle
                onClick={() => {
                  return setColumnQuantity(columnQuantity + 1)
                }}
                size={22}
                className='cursor-pointer transition-all hover:scale-110 hover:brightness-responsive active:scale-90'
              />
            </div>
          </div>
        </div>

        <ThemeSwitcher />
      </nav>

      <div className='flex w-max'>
        <div className='sticky left-0 flex flex-col'>
          <span className='h-6 w-10 bg-secondary' />
          <Rows rowQuantity={rowQuantity} />
        </div>
        <div className='flex'>
          <Columns columnQuantity={columnQuantity} rowQuantity={rowQuantity} />
        </div>
      </div>
    </div>
  )
}

export { Spreadsheet }
