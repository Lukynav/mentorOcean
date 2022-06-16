/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#1C1C25',
        'sky-blue': '#00CDAC',
        'green': '#17A966',
      },
      spacing: {
        '128': '32rem',
        '300': '57rem'
      },
      screens:{
        md:'1020px',
        sm:'700px'
      }
    },
  },
  plugins: [],
}
