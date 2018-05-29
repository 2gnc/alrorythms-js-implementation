const isPalindromeV1 = (string) => {
  const strArr = string.toLowerCase().split('');
  const lettersArr = [];
  const validChar = 'qwertyuiopasdfghjklzxcvbnmйцукенгшщзхъфывапролджэячсмитьбюё'.split('');

  strArr.forEach((char) => {
    if (validChar.includes(char)) lettersArr.push(char);
  });
  return lettersArr.join('') === lettersArr.reverse().join('');
};

const isPalindromeV2 = (string) => {
  const strArr = string.toLowerCase().split('');
  const validChar = 'qwertyuiopasdfghjklzxcvbnmйцукенгшщзхъфывапролджэячсмитьбюё'.split('');

  const lettersArr = strArr.filter(char => validChar.includes(char));

  return lettersArr.join('') === lettersArr.reverse().join('');
};

module.exports.v1 = isPalindromeV1;
module.exports.v2 = isPalindromeV2;

// сложность O(n)
