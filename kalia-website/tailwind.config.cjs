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
          500: '#FFD000', // kalia-gold
        },
      },
      fontFamily: {
        'georgia': ['Georgia', 'serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      animation: {
        'fadeInLeft': 'fadeInLeft 1.2s ease-out forwards',
        'fadeInRight': 'fadeInRight 1.2s ease-out forwards',
        'pulse': 'pulse 2s infinite',
      },
      keyframes: {
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        pulse: {
          '0%': { boxShadow: '0 0 0 0 rgba(255, 208, 0, 0.7)' },
          '70%': { boxShadow: '0 0 0 10px rgba(255, 208, 0, 0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(255, 208, 0, 0)' }
        }
      },
      spacing: {
        '85': '21.25rem', // Custom spacing for logo
      }
    },
  },
  plugins: [],
}