const getMean = arr => {
  return (arr.reduce((prev, next) => (prev + next)) / arr.length);
};
const getMedian = arr => {
  const sortedArr = arr.sort((a, b) => a - b);
  return sortedArr;
};
const getModule = (arr) => {
  return 1;
};
const meanMedianModule = arr => ({
  mean: getMean(arr),
  median: getMedian(arr),
  module: getModule(arr),
});

const abc = meanMedianModule([6, 2, 1, 4, 5, 3]);
console.log(abc);
