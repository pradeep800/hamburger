/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
  animation:{
    "slideIn":"slide-in 1s ease-in-out forwards",
    "slideOut":"slide-out 1s ease-in-out forwards"
  },
  keyframes:{
    "slide-in":{
      to:{
        transform:"translateX(0%)"
      }
    },
    "slide-out":{
      to:{
        transform:"translateX(-100%)",
      }
    }
  }
},
  },
  
  


  plugins: [],
}