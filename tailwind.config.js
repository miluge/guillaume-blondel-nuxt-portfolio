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
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
