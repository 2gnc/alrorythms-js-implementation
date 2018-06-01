const getMean = arr => (arr.reduce((prev, next) => (prev + next)) / arr.length);

const getMedian = arr => {
  const sortedArr = arr.sort((a, b) => a - b);
  let middle;
  if (sortedArr.length % 2 === 0) {
    const a = (sortedArr.length / 2) - 1;
    const b = (sortedArr.length / 2);
    middle = (sortedArr[a] + sortedArr[b]) / 2;
  } else {
    middle = sortedArr[Math.round(sortedArr.length - 1) / 2];
  }
  return middle;
};

const getMode = arr => {
  const obj = {};
  arr.forEach(el => {
    if (!obj[el]) obj[el] = 0;
    obj[el]++;
  });

  let max = 0;
  let maxArr = [];

  Object.entries(obj).forEach(entry => {
    if (entry[1] > max) {
      [max] = [entry[1]];
      maxArr = [entry[0]];
    } else if (entry[1] === max) {
      maxArr.push(entry[0]);
    }
    if (maxArr.length === Object.entries(obj).length) maxArr = [];
  });

  return maxArr;
};

const meanMedianMode = arr => ({
  mean: getMean(arr),
  median: getMedian(arr),
  mode: getMode(arr),
});

module.exports.meanObj = meanMedianMode;
module.exports.mean = getMean;
module.exports.median = getMedian;
module.exports.mode = getMode;
