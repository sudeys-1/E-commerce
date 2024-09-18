/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      colors:{
        primaryColor :"#3E0633",
        secondaryColor:"#E8E9F5",
        thirdColor:"#F3E80E"
      },


      fontFamily:{
        primaryFont :"Poppins",
        secondaryFont :"Padauk"
      }
    },
  },
  plugins: [],
}

