import type {APIRoute} from 'astro';
import {sites} from '../config/sites.js';
export const GET:APIRoute=()=>{
const s=sites[process.env.SITE_KEY||'weather'];
const preview=process.env.GITHUB_PAGES!=='true'&&s.url.includes('example.com');
return new Response(preview?'User-agent: *\nDisallow: /\n':'User-agent: *\nAllow: /\n',{headers:{'Content-Type':'text/plain; charset=utf-8'}});
};