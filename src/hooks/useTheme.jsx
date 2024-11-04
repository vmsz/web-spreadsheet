const page = document.body.classList
const storedTheme = localStorage.getItem('theme')

const applyUserPreferredTheme = () => {
  if (storedTheme) {
    return page.add(storedTheme)
  }
  if (window.matchMedia) {
    if (window.matchMedia('(prefers-color-scheme: light)').matches) {
      return page.add('light-theme')
    }
  }
  return page.add('dark-theme')
}

const switchTheme = () => {
  if (page.contains('light-theme')) {
    page.remove('light-theme')
    localStorage.setItem('theme', 'dark-theme')
    return page.add('dark-theme')
  }
  page.remove('dark-theme')
  localStorage.setItem('theme', 'light-theme')
  return page.add('light-theme')
}

export { applyUserPreferredTheme, switchTheme }
