/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#252525',
        'primary-light': '#252525b3',
        'secondary-light': '#534CC2',
        'secondary-dark': '#544cc262',
        'tertiary': '#CDCDCD',

      },
    },
  },
  plugins: [],
}

