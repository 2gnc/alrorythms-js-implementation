const merge = require('./01-merge-sort');

describe('сортировка слиянием', () => {
  it('сортировка четного массива', () => {
    expect(merge.sort([4, 1, 2, 3])).toEqual([1, 2, 3, 4]);
  });
  it('сортировка нечетного массива', () => {
    expect(merge.sort([4, 1, 2, 3, 5])).toEqual([1, 2, 3, 4, 5]);
  });
  it('массив уже отсортирован', () => {
    expect(merge.sort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });
  it('массив одинаковых чисел', () => {
    expect(merge.sort([1, 1, 1, 1, 1])).toEqual([1, 1, 1, 1, 1]);
  });
  it('пустой массив', () => {
    expect(merge.sort([])).toEqual([]);
  });
});
