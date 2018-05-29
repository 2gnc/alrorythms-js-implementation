const isPalindromeV1 = (string) => {
  let isPalindrome = true;
  const strArr = string.toLowerCase().split('');
  console.log(strArr);
  return isPalindrome;
};

isPalindromeV1('Madam, I`m Adam');

module.exports.v1 = isPalindromeV1;
