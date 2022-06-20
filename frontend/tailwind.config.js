const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Libre-Bakersville', ...defaultTheme.fontFamily.sans]
    },
    minHeight: {
      'ten': '10vh',
      'third': '30vh',
      'half': '50vh',
      'twothirds': '75vh',
      'screen': '100vh'
    },
    extend: {
      gridTemplateRows: {
        '[auto,auto,1fr]': 'auto auto 1fr',
      },
      screens: {
        'low': {'raw': '(min-height: 600px)'},
        'mid': {'raw': '(min-height: 700px)'},
        'tall': { 'raw': '(min-height: 800px)' },
      },
    },
  },
  plugins: [
    // ...
    require('@tailwindcss/aspect-ratio')
  ],
}
