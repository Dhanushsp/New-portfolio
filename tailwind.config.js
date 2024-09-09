/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}", "./*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'jetbrains-mono': ['JetBrains Mono', 'monospace'],
        'love-light':['love-light', 'cursive'],
        'londrina-solid':['londrina-solid,sans-serif']
      },
    },
  },
  plugins: [function({ addUtilities }) {
    addUtilities({
      '.scrollbar-hide': {
        /* Hide scrollbar for IE, Edge, and Firefox */
        '-ms-overflow-style': 'none', /* IE and Edge */
        'scrollbar-width': 'none',    /* Firefox */
        /* Hide scrollbar for Chrome, Safari, and Opera */
        '&::-webkit-scrollbar': {
          display: 'none',
        },
      },
    });
  },],
}

