/* eslint-env node */
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './{src,sandbox}/**/*.{vue,js,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
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
