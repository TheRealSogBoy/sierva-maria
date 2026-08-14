/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: '#FDF6EE',
        nude: '#C4A882',
        navy: '#1A1A2E',
        'nude-dark': '#b3956e',
        'cream-card': '#F7EEE3',
      },
      fontFamily: {
        serif: ['"Playfair Display"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Inter"', '"Montserrat"', 'sans-serif'],
      },
      letterSpacing: {
        'widest-xl': '0.35em',
      },
    },
  },
  plugins: [],
}
