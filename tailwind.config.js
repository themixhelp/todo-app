module.exports = {
  purge: {
    enabled: true,
    layers: ["components", "utilities"],
    content: ["./public/*.html"],
  },

  darkMode: false, // or 'media' or 'class'

  theme: {
    extend: {},

    fontFamily: {
      "display": ["'Open Sans'"],
    },
  },

  variants: {
    extend: {},
  },

  plugins: [],
}