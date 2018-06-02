const binarySearch = (arr, num) => {
  const mid = Math.floor(arr.length / 2);
  const midEl = arr[mid];

  if (midEl === num) {
    return true;
  } else if (midEl < num && arr.length > 1) {
    return binarySearch(arr.splice(mid, arr.length), num);
  } else if (midEl > num && arr.length > 1) {
    return binarySearch(arr.splice(0, mid), num);
  }
  return false;
};

module.exports = binarySearch;
