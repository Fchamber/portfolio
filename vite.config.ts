import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: { allowedHosts: ['terminal.local'] },
  build: {
    // xp.css contains a selector that lightningcss (Vite 8 default) rejects;
    // fall back to esbuild CSS minification which is more lenient.
    cssMinify: 'esbuild',
  },
});
