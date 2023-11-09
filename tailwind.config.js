/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        btnColor: '#b39c5b'
      },
      fontFamily: {
        fontLibre: ["'Libre Baskerville', serif"]
      }
    },
  },
  plugins: [require("daisyui")],
}

