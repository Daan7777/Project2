// Dit is tailwind.config.js iets met javascript waarmee je classes kan maken.
// Bijvoorbeeld: bg-blue-500 (bg-blue betekend pak kleur blauw, en hoe hoger het getal, hoe donkerder de kleur).
const colors = require('tailwindcss/colors')
module.exports = {
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
    }
  }
}