const re = require('./05-reverse-words');

describe('reverseWords', () => {
  it('разворот букв', () => {
    expect(re('мама ела')).toBe('амам але');
  });
  it('одно слово', () => {
    expect(re('мама')).toBe('амам');
  });
  it('пустая строка', () => {
    expect(re('')).toBe('');
  });
});
