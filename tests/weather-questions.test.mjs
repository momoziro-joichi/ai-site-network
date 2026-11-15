import test from 'node:test';
import assert from 'node:assert/strict';
import {questions} from '../src/data/weather-questions.mjs';
test('weather quiz has 112 original and parameterized questions',()=>assert.equal(questions.length,112));
test('all questions have valid unique identifiers',()=>assert.equal(new Set(questions.map(x=>x.id)).size,questions.length));
test('every question has a valid answer and explanation',()=>{for(const q of questions){assert.ok(['一般','専門','実技基礎'].includes(q.section));assert.ok(q.question.length>5);assert.ok(q.choices.length>=3);assert.ok(Number.isInteger(q.answer)&&q.answer>=0&&q.answer<q.choices.length);assert.ok(q.explanation.length>10)}});

test('answer choices are distinct',()=>{for(const q of questions)assert.equal(new Set(q.choices).size,q.choices.length,q.id)});
test('question sections are represented',()=>{for(const section of ['一般','専門','実技基礎'])assert.ok(questions.some(q=>q.section===section))});
