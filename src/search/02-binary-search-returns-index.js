const binary = (arr, el, start, end) => {
  if (arr.length === 0) return -1;
  let startIdx = start || 0;
  let endIdx = end || arr.length - 1;
  const midIdx = startIdx + Math.round((endIdx - startIdx) / 2);
  if ((startIdx + 1 === endIdx) || startIdx === endIdx) {
    if (el === arr[startIdx]) return startIdx;
    if (el === arr[endIdx]) return endIdx;
    return -1;
  }
  if (el <= arr[midIdx]) endIdx = midIdx;
  if (el > arr[midIdx]) startIdx = midIdx;
  return binary(arr, el, startIdx, endIdx);
};

module.exports = binary;
