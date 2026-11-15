import test from 'node:test';
import assert from 'node:assert/strict';
import {caseStudies} from '../src/data/weather-case-studies.mjs';
import {curricula} from '../src/config/curricula.mjs';
test('written cases cover all three official practice themes',()=>{const topics=new Set(caseStudies.map(c=>c.topic));for(const topic of ['気象概況','局地予想','緊急時対応'])assert.ok(topics.has(topic))});
test('written case answers include rationale and unique ids',()=>{assert.equal(new Set(caseStudies.map(c=>c.id)).size,caseStudies.length);for(const c of caseStudies){assert.ok(c.facts.length>=2);for(const q of c.questions){assert.ok(q.prompt.length>10);assert.ok(q.model.length>3);assert.ok(q.reason.length>8)}}});
test('five site curricula have actual links and distinct tracks',()=>{assert.deepEqual(Object.keys(curricula).sort(),['english','math','rail','tools','weather']);for(const [key,site] of Object.entries(curricula)){assert.ok(site.tracks.length>=3,key);assert.ok(site.links.length>=3,key);assert.equal(new Set(site.links.map(x=>x[1])).size,site.links.length)}});