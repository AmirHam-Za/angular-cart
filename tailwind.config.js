/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '*',
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
  darkMode: "class"
}

