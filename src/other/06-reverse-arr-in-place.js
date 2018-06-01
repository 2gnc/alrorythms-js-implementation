const reverseArrInPlace = arr => {
  const al = arr.length - 1;
  const mi = Math.floor(arr.length / 2);
  for (let i = 0; i < mi; i++) {
    [arr[i], arr[al - i]] = [arr[al - i], arr[i]];
  }
  return arr;
};

module.exports = reverseArrInPlace;
// O(logN)
