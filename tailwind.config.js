module.exports = {
  mode: 'jit',
  purge: [
    './layouts/**/*.vue',
    './components/**/*.vue',
    './pages/**/*.vue'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        gray: {
          150: '#eeedf2'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
  ],
}
