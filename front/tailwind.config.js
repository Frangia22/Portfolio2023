/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'onest': ['Onest', 'sans-serif'],
    },
    colors: {
      primary: '#010038',
      secondaryBlue: '#293A80',
      ternartyBlue: '"537EC5',
      white: '#efe9f4',
      foreground: '#171d1c',
      yellowGray: '#F39422'
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}

