/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
          art : ['art', 'sans-serif'],
      }
    },
  },
  plugins: [],
}