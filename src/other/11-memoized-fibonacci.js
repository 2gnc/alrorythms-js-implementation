const mFibo = (num, cashe) => {
  const c = cashe || [];
  if (c[num]) return c[num];
  if (num < 3) return 1;
  c[num] = mFibo(num - 1, c) + mFibo(num - 2, c);
  return c[num];
};

module.exports = mFibo;
