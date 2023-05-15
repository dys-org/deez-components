import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    lib: {
      // file that contains our components exported
      entry: fileURLToPath(new URL('./src/index.ts', import.meta.url)),
      name: 'DeezComponents',
      // the proper extensions will be added
      fileName: 'deez-components',
    },
    rollupOptions: {
      // externalize deps that shouldn't be bundled into the library
      external: ['vue'],
      // Provide global variables to use in the UMD build for externalized deps
      output: { globals: { vue: 'Vue' } },
    },
  },
});
