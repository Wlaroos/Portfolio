import { defineConfig } from 'vite';

export default defineConfig({
  base: '/Portfolio/', // Base URL for the site
  build: {
    rollupOptions: {
      input: {
        main: 'index.html'
      },
    },
    assetsInlineLimit: 0, // Prevents Vite from inlining small files
  }
});
