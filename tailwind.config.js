/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nude: '#E8D5C4',
        blush: '#F2A7BB',
        'blush-light': '#FDE8EE',
        'blush-dark': '#D4849A',
        gold: '#C9A84C',
        'gold-light': '#E8C97A',
        'nude-dark': '#C4A882',
        'nude-light': '#F5EDE4',
        'cream': '#FDF8F3',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Lato"', 'Inter', 'sans-serif'],
        script: ['"Pinyon Script"', 'cursive'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #C9A84C, #E8C97A, #C9A84C)',
      },
    },
  },
  plugins: [],
}
