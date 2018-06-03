const f = require('./09-fibonacci.js');

describe('фибоначчи', () => {
  it('фибоначчи - рекурсия', () => {
    expect(f.f1(15)).toBe(610);
  });
  it('фибоначчи - алгоритм Бине', () => {
    expect(f.f2(15)).toBe(610);
  });
  it('фибоначчи - цикл', () => {
    expect(f.f3(15)).toBe(610);
  });
});
