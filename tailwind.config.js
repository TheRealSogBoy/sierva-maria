/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'nude-primary': '#C4A882',
        'nude-hover': '#b3956e',
        'nude-light': '#F4EBE1',
        'cream-bg': '#FDF6EE',
        'cream-card': '#FAF1E6',
        'navy-text': '#1A1A2E',
        'navy-muted': '#2D2D44',
        'aurea-gold': '#B8963E',
        'aurea-gold-light': '#D4B258',
        'aurea-navy': '#0D0D1E',
        'aurea-white': '#FAFAFA',
      },
      fontFamily: {
        serif: ['"Playfair Display"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        editorial: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'Montserrat', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
