/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'css-icon-blue': '#0074D9',
        'html-icon-orange': '#FF851B',
      }
    },
  },
  plugins: [],
}
