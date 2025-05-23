/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'kalia-gold': '#FFD000',
        'kalia-beige': '#F8F1E7',
        primary: {
          500: '#1e40af', // blue-700
        },
        secondary: {
          500: '#FFD000', // gold
        },
      },
      fontFamily: {
        'georgia': ['Georgia', 'serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}