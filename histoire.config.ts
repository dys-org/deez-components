import { HstVue } from '@histoire/plugin-vue';
import { defaultColors, defineConfig } from 'histoire';

export default defineConfig({
  plugins: [HstVue()],
  setupFile: '/sandbox/histoire.setup.ts',
  theme: {
    title: 'deez-components',
    logo: {
      square: '/src/assets/img/deez-components-square.svg',
      light: '/src/assets/img/deez-logo-light.svg',
      dark: '/src/assets/img/deez-logo-dark.svg',
    },
    // logoHref: 'https://acme.com',
    // favicon: './favicon.ico',
    colors: {
      gray: defaultColors.gray,
      primary: defaultColors.sky,
    },
  },
});
