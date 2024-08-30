/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'jetbrains-mono': ['JetBrains Mono', 'monospace'],
        'love-light':['love-light', 'cursive'],
      },
    },
  },
  plugins: [],
}

