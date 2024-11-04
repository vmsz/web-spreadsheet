import { switchTheme } from '../hooks/useTheme'
import { WiMoonAltFirstQuarter } from 'react-icons/wi'

const ThemeSwitcher = () => {
  return (
    <button
      id='theme-switcher'
      onClick={switchTheme}
      className='rounded-full p-1.5 text-center transition-all hover:scale-110 hover:brightness-responsive active:scale-90'
    >
      <WiMoonAltFirstQuarter
        color='var(--secondary-text)'
        className='transition-all'
        size={36}
      />
    </button>
  )
}

export { ThemeSwitcher }
