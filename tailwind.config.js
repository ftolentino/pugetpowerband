module.exports = {
  mode: 'jit',
  purge: [
    './src/**/*.{js, jsx, ts, tsx}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'sm': '576px',
        // => @media (min-width: 576px) { ... }
        'md': '960px',
        // => @media (min-width: 960px) { ... }
        'xl': '1440px',
        // => @media (min-width: 1440px) { ... } 
      },
      colors: {
        'aqua-teal': '#69ffe8',
      }
    },
    fontFamily: {
      'montserrat': ['Montserrat, sans-serif'],
      'rammeto': ['Nanum Gothic']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
