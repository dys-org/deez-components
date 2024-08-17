import { getIconCollections, iconsPlugin } from '@egoist/tailwindcss-icons';
import forms from '@tailwindcss/forms';
import animate from 'tailwindcss-animate';
import colors from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */
export default {
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
    forms({ strategy: 'class' }),
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
