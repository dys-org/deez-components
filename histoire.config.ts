import { HstVue } from '@histoire/plugin-vue';
import { defaultColors, defineConfig } from 'histoire';

export default defineConfig({
  plugins: [HstVue()],
  setupFile: '/sandbox/histoire.setup.ts',
  theme: {
    title: 'deez-components',
    logo: {
      square: '/src/assets/img/DYS_white_on_red.svg',
      light: '/src/assets/img/DYS_light.svg',
      dark: '/src/assets/img/DYS_dark.svg',
    },
    dark: '/src/assets/img/DYS_dark.svg',
    // logoHref: 'https://acme.com',
    // favicon: './favicon.ico',
    colors: {
      gray: defaultColors.gray,
      primary: defaultColors.teal,
    },
  },
});
