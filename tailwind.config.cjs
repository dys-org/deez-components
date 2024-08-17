/* eslint-env node */
const colors = require('tailwindcss/colors');
const { iconsPlugin, getIconCollections } = require('@egoist/tailwindcss-icons');
const animate = require('tailwindcss-animate');

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
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class', // only generate classes
    }),
    iconsPlugin({
      // Select the icon collections you want to use
      collections: getIconCollections(['lucide']),
      extraProperties: { display: 'block', verticalAlign: 'middle' },
    }),
    animate,
  ],
};

// https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/config.full.js
// https://github.com/tailwindlabs/tailwindcss/blob/master/src/public/colors.js
