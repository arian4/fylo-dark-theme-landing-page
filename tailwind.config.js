/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors:{
      transparent: 'transparent',
      current: 'currentColor',
      intro_background : 'hsl(217, 28%, 15%)',
      main_background : 'hsl(218, 28%, 13%)',
      footer_background : 'hsl(216, 53%, 9%)',
      testimonials_background : 'hsl(219, 30%, 18%)',
      cyan : 'hsl(176, 68%, 64%)',
      blue : 'hsl(198, 60%, 50%)',
      red : 'hsl(0, 100%, 63%)',
      white : 'hsl(0, 0%, 100%)'
    },
    extend: {
      fontFamily : {
        'body' : ['"Open Sans"', '"sans-serif"']
      }
    },
  },
  plugins: [],
}
