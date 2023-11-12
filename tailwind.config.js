/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/src/assets/Super.jpg')",
      },
     
    },
    fontFamily:{
      nerko:["Nerko One","cursive"],
      sand:["Quicksand","sans-serif"]
    }
   
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

