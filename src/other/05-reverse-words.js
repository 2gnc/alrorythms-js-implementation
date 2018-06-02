const reverseWords = str => {
  const wordsArr = str.split(' ');
  const reversedArr = wordsArr.map(word => {
    let newWord = '';
    for (let i = word.length - 1; i >= 0; i--) {
      newWord += word[i];
    }
    return newWord;
  });
  return reversedArr.join(' ');
};

module.exports = reverseWords;
// O(n)
