/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
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
      // Explicitly include font weights
      fontWeight: {
        thin: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500', // This ensures font-medium is available
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
      }
    },
  },
  plugins: [],
}