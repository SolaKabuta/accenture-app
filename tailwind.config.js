/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'blk': '#17111D',
        'btn': '#6502B9',
        'log': '#AF0EE9',
        'rng': '#FA9753',
      }
    },
  },
  plugins: [],
}

