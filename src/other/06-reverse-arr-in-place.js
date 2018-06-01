const reverseArrInPlace = arr => {
  const al = arr.length - 1;
  for (let i = 0; i < arr.length / 2; i++) {
    [arr[i], arr[al - i]] = [arr[al - i], arr[i]];
  }
  return arr;
};

module.exports = reverseArrInPlace;
// O(logN)
