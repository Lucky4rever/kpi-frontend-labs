import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  server: {
    port: 3000,
    host: 'localhost'
  },
  root: './',
  output: 'static'
});