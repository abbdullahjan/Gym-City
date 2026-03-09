/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          yellow: '#FFD700',
          black: '#000000',
          darkGray: '#0F0F0F',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Bebas Neue', 'sans-serif'],
      },
      boxShadow: {
        'yellow-glow': '0 0 30px rgba(255, 215, 0, 0.3)',
        'yellow-glow-lg': '0 0 60px rgba(255, 215, 0, 0.4)',
      },
    },
  },
  plugins: [],
}
