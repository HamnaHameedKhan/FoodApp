/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#1E3A8A',
        secondary: '#FF830F',
        hover:'#0F9AFF'
      }
    },
  },
  plugins: [],
}