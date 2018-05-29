const hn1 = require('./02-harmless-ransom-note');


const note = 'мама Ела раму с мылом с маслом';
const text = 'мама не ела раму и вообще не любит мыло';
const text2 = 'мама не ела раму и вообще не любит c мыло масло';
const text3 = 'мама не ела раму и вообще не любит с мылом маслом с';

test('проверка на неполное совпадение v1', () => {
  expect(hn1.hn1(note, text)).toBe(false);
});

test('проверка на полное совпадение но нехватку одинаковых слов v1', () => {
  expect(hn1.hn1(note, text2)).toBe(false);
});

test('проверка на полное совпадение v1', () => {
  expect(hn1.hn1(note, text3)).toBe(true);
});

test('проверка на пустой текст в записке v1', () => {
  expect(hn1.hn1('', text)).toBe(false);
});

test('проверка на пустой текст в заметке v1', () => {
  expect(hn1.hn1(note, '')).toBe(false);
});

test('проверка на неполное совпадение v2', () => {
  expect(hn1.hn2(note, text)).toBe(false);
});

test('проверка на полное совпадение но нехватку одинаковых слов v2', () => {
  expect(hn1.hn2(note, text2)).toBe(false);
});

test('проверка на полное совпадение v2', () => {
  expect(hn1.hn2(note, text3)).toBe(true);
});

test('проверка на пустой текст в записке v2', () => {
  expect(hn1.hn2('', text)).toBe(false);
});

test('проверка на пустой текст в заметке v2', () => {
  expect(hn1.hn2(note, '')).toBe(false);
});
