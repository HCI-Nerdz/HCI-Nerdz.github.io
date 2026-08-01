import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://hci-nerdz.github.io',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
});
