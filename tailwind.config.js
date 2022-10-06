/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/index.html",
    "./public/diseno/diseno.html",
    "./public/login/login.html"
  ],
  theme: {
    extend: {
      width: {
        'logo': '12em',
      }
    },
  },
  plugins: [],
}