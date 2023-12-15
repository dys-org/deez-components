import { HstVue } from '@histoire/plugin-vue';
import { defaultColors, defineConfig } from 'histoire';
import twColors from 'tailwindcss/colors';
import { fileURLToPath } from 'url';

function filePath(url: string) {
  return fileURLToPath(new URL(url, import.meta.url));
}

export default defineConfig({
  plugins: [HstVue()],
  setupFile: '/sandbox/histoire.setup.ts',
  theme: {
    title: 'deez-components',
    logo: {
      square: filePath('./src/assets/img/deez-components-square.svg'),
      light: filePath('./src/assets/img/deez-logo-light.svg'),
      dark: filePath('./src/assets/img/deez-logo-dark.svg'),
    },
    // logoHref: 'https://acme.com',
    favicon: 'favicon.svg',
    colors: {
      gray: defaultColors.gray,

      primary: defaultColors.sky,
    },
  },
  backgroundPresets: [
    {
      label: 'Transparent',
      color: 'transparent',
      contrastColor: twColors.gray[900],
    },
    {
      label: 'White',
      color: '#fff',
      contrastColor: twColors.gray[900],
    },
    {
      label: 'gray-300',
      color: twColors.gray[300],
      contrastColor: twColors.gray[900],
    },
    {
      label: 'gray-800',
      color: twColors.gray[800],
      contrastColor: twColors.gray[50],
    },
    {
      label: 'gray-900',
      color: twColors.gray[900],
      contrastColor: twColors.gray[50],
    },
  ],
  // autoApplyContrastColor: true,
  defaultStoryProps: {
    icon: 'lucide:puzzle',
    layout: {
      type: 'grid',
      width: '100%',
    },
  },
});
