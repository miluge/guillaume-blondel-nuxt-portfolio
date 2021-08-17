module.exports = {
  mode: 'jit',
  purge: {
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'plugins/**/*.js',
      'pages/**/*.vue',
      'nuxt.config.js',
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        '9000': '9000', // It's over 9000!
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
