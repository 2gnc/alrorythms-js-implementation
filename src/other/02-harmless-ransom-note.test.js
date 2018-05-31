const hn1 = require('./02-harmless-ransom-note');


const note = 'мама Ела раму с мылом с маслом';
const text = 'мама не ела раму и вообще не любит мыло';
const text2 = 'мама не ела раму и вообще не любит c мыло масло';
const text3 = 'мама не ела раму и вообще не любит с мылом маслом с';

describe('Записка версия 1', () => {
  it('неполное совпадение', () => {
    expect(hn1.hn1(note, text)).toBe(false);
  });

  it('полное совпадение но нехватку одинаковых слов', () => {
    expect(hn1.hn1(note, text2)).toBe(false);
  });

  it('полное совпадение', () => {
    expect(hn1.hn1(note, text3)).toBe(true);
  });

  it('пустой текст в записке', () => {
    expect(hn1.hn1('', text)).toBe(false);
  });

  it('пустой текст в заметке', () => {
    expect(hn1.hn1(note, '')).toBe(false);
  });
});

describe('Записка версия 2', () => {
  test('неполное совпадение', () => {
    expect(hn1.hn2(note, text)).toBe(false);
  });

  test('полное совпадение но нехватка одинаковых слов', () => {
    expect(hn1.hn2(note, text2)).toBe(false);
  });

  test('полное совпадение', () => {
    expect(hn1.hn2(note, text3)).toBe(true);
  });

  test('пустой текст в записке', () => {
    expect(hn1.hn2('', text)).toBe(false);
  });

  it('пустой текст в заметке', () => {
    expect(hn1.hn2(note, '')).toBe(false);
  });
});

