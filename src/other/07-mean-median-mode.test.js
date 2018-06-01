const m = require('./07-mean-median-mode');

describe('MeanMedianModule', () => {
  it('', () => {
    expect(m.meanObj([1, 2, 3])).toEqual({
      mean: 2,
      median: 2,
      mode: [],
    });
  });
});

describe('getMean', () => {
  it('непустой массив [1, 2, 3]', () => {
    expect(m.mean([1, 2, 3])).toBe(2);
  });
  it('непустой массив [9, 9, 9, 10]', () => {
    expect(m.mean([9, 9, 9, 10])).toBe(9.25);
  });
});

describe('getMedian', () => {
  it('непустой массив [1, 2, 3]', () => {
    expect(m.median([1, 2, 3])).toBe(2);
  });
  it('непустой массив [9, 9, 9, 10]', () => {
    expect(m.median([9, 9, 9, 10])).toBe(9);
  });
});

describe('getMode', () => {
  it('массив все числа разные', () => {
    expect(m.mode([1, 2, 3])).toEqual([]);
  });
  it('массив все числа одинаковые', () => {
    expect(m.mode([1, 1, 1])).toEqual([]);
  });
  it('массив есть повторяющиеся числа', () => {
    expect(m.mode([1, 1, 3])).toEqual(['1']);
  });
  it('массив есть несколько повторяющиеся чисел', () => {
    expect(m.mode([1, 1, 3, 5, 5])).toEqual(['1', '5']);
  });
  it('массив из одного числа', () => {
    expect(m.mode([1])).toEqual([]);
  });
});
