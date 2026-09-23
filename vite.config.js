import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // `resources` holds the static assets (images, documents, FontAwesome icons).
  // Serving it as the public directory means everything in it is available from
  // the site root in dev (`npm run dev`) and is copied into `dist` on build,
  // so URLs like `/images/IMG_0537.JPG` work in both.
  publicDir: 'resources',
});
