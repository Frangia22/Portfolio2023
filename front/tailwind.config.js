/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      'onest': ['Onest', 'sans-serif'],
      'roboto': ['Roboto Mono', 'sans-serif'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: '#010038',
        secondaryBlue: '#abacaf',
        ternartyBlue: '#E5E5E5',
        black: '#181819',
        blackSecondary: '#2e2e30',
        white: '#F8F9FB',
        whiteSecondary: "#CBD5E1",
        foreground: '#253645',
        yellow: '#F4C753',
      dark: {
        primary: '#010038',
        secondaryBlue: '#29374C',
        ternartyBlue: '#29374C',
        white: '#F8F9FB',
        whiteSecondary: "#CBD5E1",
        foreground: '#253645',
        yellow: '#F4C753',
      },      
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}

