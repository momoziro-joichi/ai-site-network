import { defineConfig } from 'astro/config';
import { sites } from './src/config/sites.js';
const key = process.env.SITE_KEY || 'weather';
if (!(key in sites)) throw new Error(`Unknown SITE_KEY: ${key}`);
export default defineConfig({ site: sites[key].url, outDir: `./dist/${key}`, output: 'static' });
