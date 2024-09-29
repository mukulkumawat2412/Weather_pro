/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        
        "image":"url('/src/media/weather.jpg.jpeg')",
        "left":"url('/src/media/nature.jpg.jpg')"
      },


    },
  },
  plugins: [],
}

