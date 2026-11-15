import { defineConfig } from 'astro/config';
import { sites } from './src/config/sites.js';
const key = process.env.SITE_KEY || 'weather';
if (!(key in sites)) throw new Error(`Unknown SITE_KEY: ${key}`);
const pages = process.env.GITHUB_PAGES === 'true';
export default defineConfig({
  site: pages ? 'https://momoziro-joichi.github.io' : sites[key].url,
  base: pages ? `/ai-site-network/${key}` : '/',
  outDir: `./dist/${key}`,
  output: 'static',
});
