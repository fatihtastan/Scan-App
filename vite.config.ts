import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import checker from 'vite-plugin-checker';

export default defineConfig({
  build: {
    emptyOutDir: true,
  },
  plugins: [react()],
});
