/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandBlue: {
          light: '#3B82F6',
          DEFAULT: '#1E40AF',
          dark: '#1E3A8A',
        },
        brandGreen: {
          light: '#22C55E',
          DEFAULT: '#16A34A',
          dark: '#15803D',
        },
        brandOrange: {
          light: '#FB923C',
          DEFAULT: '#F97316',
          dark: '#EA580C',
        },
        brandBg: '#F8FAFC',
        brandText: '#334155',
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2.5s infinite',
      }
    },
  },
  plugins: [],
}
