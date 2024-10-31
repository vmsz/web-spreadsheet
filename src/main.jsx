import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
import { applyUserPreferredTheme } from './hooks/useTheme'
import { Spreadsheet } from './pages/SpreadSheet'

const rootElement = document.getElementById('root')
const root = ReactDOM.createRoot(rootElement)

applyUserPreferredTheme()

root.render(
  <StrictMode>
    <Spreadsheet />
  </StrictMode>,
)
