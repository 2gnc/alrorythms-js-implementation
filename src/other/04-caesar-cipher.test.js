const caesar = require('./04-caesar-cipher');

describe('шифр Цезаря', () => {
  it('сдвиг на положительное число', () => {
    expect(caesar('zoo keeper', 5)).toEqual('ett pjjujw');
  });
  it('есть большие буквы', () => {
    expect(caesar('Zoo keeper', 5)).toEqual('Ett pjjujw');
  });
  it('сдвиг на отрицательное число', () => {
    expect(caesar('zoo keeper', -1)).toEqual('ynn jddodq');
  });
  it('сдвиг на положительное число, преход через конец алфавита', () => {
    expect(caesar('xwing', 5)).toEqual('cbnsl');
  });
  it('сдвиг на отрицательное число, переход через начало алфавита', () => {
    expect(caesar('abba', -2)).toEqual('yzzy');
  });
  it('сдвиг на 0', () => {
    expect(caesar('abba', 0)).toEqual('abba');
  });
  it('сдвиг на 300', () => {
    expect(caesar('abba', 300)).toEqual('oppo');
  });
  it('длинны строк одинаковые', () => {
    const a = caesar('zoo kepper', 5);
    expect(a.length === 10).toBe(true);
  });
});
