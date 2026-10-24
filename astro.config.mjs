import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { site } from './src/config/site.js';
export default defineConfig({ site: site.url, integrations: [sitemap()] });
