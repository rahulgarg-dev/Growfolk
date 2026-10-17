import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/postdrop': {
        target: 'https://postdrop.onrender.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/postdrop/, '/api/entries/submit'),
        headers: {
          Origin: 'http://growfolk.in',
        },
      },
    },
  },
});
