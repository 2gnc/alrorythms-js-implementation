const sort = arr => {
  const sorted = [...arr];
  for (let i = 1; i <=sorted.length; i++) {
    for (let k = i; k >= 0; k--) {
      if (sorted[k] < sorted[k - 1]) [sorted[k], sorted[k - 1]] = [sorted[k - 1], sorted[k]];
    }
  }
  return sorted;
};

module.exports = sort;
// O(n^2)
