/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        duoGreen: {
          DEFAULT: '#2d5234',
          hover: '#1f3a24',
          light: '#eaf0ec',
        },
        duoCream: {
          DEFAULT: '#f7f4ee',
          card: '#efe9dd',
          border: '#e2dcd0',
        }
      }
    },
  },
  plugins: [],
}