module.exports = {
  mode: 'jit',
  purge: [
    './src/**/*.{js, jsx, ts, tsx}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      montserrat: ['Montserrat, sans-serif'],
      rammeto: ['Nanum Gothic']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
  prefix: 'tw-',
}
