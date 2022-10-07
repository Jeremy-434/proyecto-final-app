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
      },
      colors:{
        'textw': '#2F2F2F',
        'bgcard':'#EDEDED',
      },
      screens: {
        'xs': '320px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
}