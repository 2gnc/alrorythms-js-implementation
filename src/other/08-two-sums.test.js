const sums = require('./08-two-sums.js');

describe('twoSums', () => {
  it('массив 1, 2, 3, 3, 4, 5 и 6', () => {
    expect(sums([1, 2, 3, 3, 4, 5], 6))
      .toEqual([[3, 3], [2, 4], [1, 5]]);
  });
});
