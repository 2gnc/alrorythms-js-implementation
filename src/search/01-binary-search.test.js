const bin = require('./01-binary-search.js');

describe('бинарный поиск', () => {
  it('элемент есть в массиве', () => {
    expect(bin([1, 2, 3], 3)).toBeTruthy();
  });
  it('элемент есть в массиве', () => {
    expect(bin([1, 2, 3], 1)).toBeTruthy();
  });
  it('элемента нет в массиве', () => {
    expect(bin([1, 2, 3], 4)).not.toBeTruthy();
  });
  it('пустой массив', () => {
    expect(bin([], 3)).not.toBeTruthy();
  });
  it('массив из одного элемента', () => {
    expect(bin([3], 3)).not.toBeTruthy();
  });
});
