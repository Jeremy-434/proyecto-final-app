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
      fontFamily: {
      'Fredoka':['Fredoka','medium','sans-serif'],
      'Fredoka2':['Fredoka','bold','sans-serif'],
      'Fredoka3':['Fredoka','light','sans-serif'],
      'Fredoka4':['Fredoka','regular','sans-serif'],
      'Fredoka5':['Fredoka','semi-bold','sans-serif'],
      },
    },
  },
  plugins: [],
}