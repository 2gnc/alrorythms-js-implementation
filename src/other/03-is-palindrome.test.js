const p = require('./03-is-palindrome');

test('Версия 1: - level', () => {
  expect(p.v1('level')).toBe(true);
});

test('Версия 1: - Level', () => {
  expect(p.v1('Level')).toBe(true);
});

test('Версия 1: - leve', () => {
  expect(p.v1('leve')).toBe(false);
});

test('Версия 1: - leel', () => {
  expect(p.v1('leel')).toBe(true);
});

test('Версия 1: - le3el', () => {
  expect(p.v1('le3el')).toBe(true);
});

test('Версия 1: - le33el', () => {
  expect(p.v1('le33el')).toBe(true);
});

test('Версия 1: - 1', () => {
  expect(p.v1('1')).toBe(true);
});

test('Версия 1: - А Лида гадила', () => {
  expect(p.v1('А Лида гадила')).toBe(true);
});

test('Версия 1: - race car', () => {
  expect(p.v1('race car')).toBe(true);
});

test('Версия 1: - Madam, I`m Adam', () => {
  expect(p.v1('Madam, I`m Adam')).toBe(true);
});

test('Версия 2: - level', () => {
  expect(p.v2('level')).toBe(true);
});

test('Версия 2: - Level', () => {
  expect(p.v2('Level')).toBe(true);
});

test('Версия 2: - leve', () => {
  expect(p.v2('leve')).toBe(false);
});

test('Версия 2: - leel', () => {
  expect(p.v2('leel')).toBe(true);
});

test('Версия 2: - le3el', () => {
  expect(p.v2('le3el')).toBe(true);
});

test('Версия 2: - le33el', () => {
  expect(p.v2('le33el')).toBe(true);
});

test('Версия 2: - 1', () => {
  expect(p.v2('1')).toBe(true);
});

test('Версия 2: - А Лида гадила', () => {
  expect(p.v2('А Лида гадила')).toBe(true);
});

test('Версия 2: - race car', () => {
  expect(p.v2('race car')).toBe(true);
});

test('Версия 2: - Madam, I`m Adam', () => {
  expect(p.v2('Madam, I`m Adam')).toBe(true);
});
