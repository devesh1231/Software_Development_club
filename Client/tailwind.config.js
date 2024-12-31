// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans:['Roboto', 'sans-serif'] ,
        rale:['Raleway', 'sans-serif']
      } ,
      keyframes: {
        carouselSlide: {
          '0%': { opacity: '0', transform: 'translateX(100%)' },
          '20%': { opacity: '1', transform: 'translateX(0)' },
          '80%': { opacity: '1', transform: 'translateX(0)' },
          '100%': { opacity: '0', transform: 'translateX(-100%)' },
        },
      },
      animation: {
        carouselSlide: 'carouselSlide 12s infinite ease-in-out',
      },
    },
  },
  plugins: [require('daisyui')], 
  daisyui: {
    themes: ["emerald"],
  }
  
  
}

