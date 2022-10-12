/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#293890',
        secondary: '#404042',
        third: '#ef4e3e',
        forth: '#dbbcac',
        fifth: '#f4947c',
        sixth: '#e9e8e4',
        dark: '#0f172a',
      },
      screens: {
        '2xl': '1320px'
      }
    },
  },
  plugins: [],
}
