const merge = (left, right) => {
  const result = [];
  while (left.length && right.length) {
    result.push(left[0] < right[0] ? left.shift() : right.shift());
  }
  while (left.length) {
    result.push(left.shift());
  }
  while (right.length) {
    result.push(right.shift());
  }
  return result;
};

const mergeSort = arr => {
  if (arr.length < 2) {
    return arr;
  }
  const middle = Math.round(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);
  return merge(
    mergeSort(left),
    mergeSort(right),
  );
};

module.exports.sort = mergeSort;
module.exports.merge = merge;

// O(logN)
// вспомогательное O(n)

