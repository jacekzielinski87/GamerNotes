/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        bebas:["Bebas Neue", "sans-serif"],
        code: ["Source Code Pro, monospace"],
      },
    },
  },
  plugins: [],
}

