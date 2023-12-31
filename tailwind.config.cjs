/* eslint-env node */
/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./index.html', './{src,sandbox}/**/*.{vue,js,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        white: colors.gray['50'],
        black: colors.gray['900'],
        primary: colors.sky,
        danger: colors.red,
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};

// https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/config.full.js
// https://github.com/tailwindlabs/tailwindcss/blob/master/src/public/colors.js
