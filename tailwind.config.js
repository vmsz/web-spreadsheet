/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Inter: 'Inter',
      },
      fontSize: {
        md: '16px',
      },
      backgroundColor: {
        primary: 'var(--primary-background)',
        secondary: 'var(--secondary-background)',
        tertiary: 'var(--tertiary-background)',

      },
      textColor: {
        primary: 'var(--primary-text)',
        secondary: 'var(--secondary-text)',
        placeholder: 'var(--placeholder-text)',
      },
      borderColor: {
        primary: 'var(--primary-border)',
        secondary: 'var(--secondary-border)'
      },
      brightness: {
        'responsive': 'var(--brightness)',
      },
    },
  },
  plugins: [],
}

