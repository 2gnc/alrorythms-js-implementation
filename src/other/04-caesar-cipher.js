const caesarCipher = (str, num) => {
  const lcStr = str.toLowerCase();
  let newStr = '';
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const number = num % 26;
  for (let i = 0; i < lcStr.length; i++) {
    if (lcStr[i] === ' ') {
      newStr += ' ';
    } else {
      const currIdx = alphabet.indexOf(lcStr[i]);
      let newIdx = currIdx + number;
      if (newIdx > 25) newIdx -= 26;
      if (newIdx < 0) newIdx += 26;
      if (str[i] === str[i].toUpperCase()) {
        newStr += alphabet[newIdx].toUpperCase();
      } else {
        newStr += alphabet[newIdx];
      }
    }
  }
  return newStr;
};
module.exports = caesarCipher;
// сложность O(n)
