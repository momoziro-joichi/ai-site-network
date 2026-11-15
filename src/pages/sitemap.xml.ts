import type {APIRoute} from 'astro';
import {sites} from '../config/sites.js';
export const GET:APIRoute=()=>{
const key=process.env.SITE_KEY||'weather';
const s=sites[key];
const root=process.env.GITHUB_PAGES==='true'?`https://momoziro-joichi.github.io/ai-site-network/${key}/`:s.url;
const paths=['','tool/','lab/','guide/','about/','privacy/','search/','my-learning/'];
if(key==='weather')paths.push('learn/','quiz/','simulator/','weather-map/','cloud-lab/','live-weather/');
const xml='<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'+paths.map(p=>'<url><loc>'+new URL(p,root).href+'</loc></url>').join('')+'</urlset>';
return new Response(xml,{headers:{'Content-Type':'application/xml'}});
};