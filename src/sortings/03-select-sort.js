const sort = arr => {
  const sorted = [...arr];
  for (let i = 0; i < sorted.length; i++) {
    let min = Infinity;
    let minIdx;
    for (let k = i; k < sorted.length; k++) {
      if (sorted[k] < min) {
        min = sorted[k];
        minIdx = k;
      }
    }
    if (sorted[i] !== min) {
      [sorted[i], sorted[minIdx]] = [sorted[minIdx], sorted[i]];
    }
  }
  return sorted;
};

module.exports = sort;
// O(n^2)
