import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Icons from 'unplugin-icons/vite';
import { peerDependencies } from './package.json';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), Icons({ scale: 0 })],
  build: {
    lib: {
      // file that contains our components exported
      entry: fileURLToPath(new URL('./src/index.ts', import.meta.url)),
      formats: ['es'],
      fileName: 'deez-components',
    },
    rollupOptions: {
      // externalize deps that shouldn't be bundled into the library
      external: [...Object.keys(peerDependencies)],
    },
  },
});
