/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'color-texto': '#A5B4FC',
        'htm': '#FF851B',
      }
    },
  },
  plugins: [],
}
