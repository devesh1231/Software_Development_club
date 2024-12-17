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
        moveX: {
          '0%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(200px)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        moveX: 'moveX 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

