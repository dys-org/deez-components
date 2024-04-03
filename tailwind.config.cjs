/* eslint-env node */
const colors = require('tailwindcss/colors');
const { iconsPlugin, getIconCollections } = require('@egoist/tailwindcss-icons');

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
  plugins: [
    require('@tailwindcss/forms'),
    iconsPlugin({
      // Select the icon collections you want to use
      collections: getIconCollections(['lucide']),
    }),
  ],
};

// https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/config.full.js
// https://github.com/tailwindlabs/tailwindcss/blob/master/src/public/colors.js
