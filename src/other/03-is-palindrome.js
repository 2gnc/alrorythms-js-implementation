const isPalindromeV1 = (string) => {
  const strArr = string.toLowerCase().split('');
  const lettersArr = [];
  const validChar = 'qwertyuiopasdfghjklzxcvbnmйцукенгшщзхъфывапролджэячсмитьбюё'.split('');

  strArr.forEach((char) => {
    if (validChar.includes(char)) lettersArr.push(char);
  });

  return lettersArr.join('') === lettersArr.reverse().join('');
};

isPalindromeV1('Madam, I`m Adam');

module.exports.v1 = isPalindromeV1;
