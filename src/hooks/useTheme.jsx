const page = document.body.classList

const applyUserPreferredTheme = () => {
  const themeOnStorage = localStorage.getItem('theme')
  if (themeOnStorage) {
    return changeTheme(themeOnStorage)
  }
  if (window.matchMedia) {
    if (window.matchMedia('(prefers-color-scheme: light)').matches) {
      return changeTheme('light')
    }
  }
  return changeTheme('dark')
}

const changeTheme = themeName => {
  page.remove('light-theme', 'dark-theme')
  return page.add(`${themeName}-theme`)
}

const storeTheme = themeName => {
  return localStorage.setItem('theme', themeName)
}

const getActualTheme = () => {
  if (page.contains('light-theme')) {
    return 'light'
  }
  return 'dark'
}

export { applyUserPreferredTheme, changeTheme, storeTheme, getActualTheme }
