/**
 *
 * @param {Array.<Number>} numbers массив чисел
 * @param {Number} num число, которое необходимо получить из пары числе массива
 * @returns {Array.<Array.<Number>>} массив с массивами в каждом из которых пара чисел
 */
// const twoSums = (numbers, num) => {
//   const result = [];
//   for (let i = 0; i < numbers.length - 1; i++) {
//     for (let j = i + 1; j < numbers.length - 1; j++) {
//       if (i + j === num) {
//         result.push([i, j]);
//       }
//     }
//   }
//   return result;
// };

const twoSums = (numbers, num) => {
  const pairs = [];
  const hash = [];

  numbers.forEach(number => {
    const secondNum = num - number;
    if (hash.includes(secondNum)) {
      pairs.push([secondNum, number]);
    }
    hash.push(number);
  });
  return pairs;
};

module.exports = twoSums;
// O(n*n)
