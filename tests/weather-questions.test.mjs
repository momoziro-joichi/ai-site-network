import test from 'node:test';
import assert from 'node:assert/strict';
import {questions} from '../src/data/weather-questions.mjs';
test('weather quiz has 24 original questions',()=>assert.equal(questions.length,24));
test('all questions have valid unique identifiers',()=>assert.equal(new Set(questions.map(x=>x.id)).size,questions.length));
test('every question has a valid answer and explanation',()=>{for(const q of questions){assert.ok(['一般','専門','実技基礎'].includes(q.section));assert.ok(q.question.length>5);assert.ok(q.choices.length>=3);assert.ok(Number.isInteger(q.answer)&&q.answer>=0&&q.answer<q.choices.length);assert.ok(q.explanation.length>10)}});
