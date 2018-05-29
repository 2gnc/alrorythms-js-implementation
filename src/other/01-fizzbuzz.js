const fzbz = (i) => {
  if (i % 15 === 0) {
    return 'FizzBuzz';
  } else if (i % 3 === 0) {
    return 'Fizz';
  } else if (i % 5 === 0) {
    return 'Buzz';
  }
  return i;
};
const fizzBuzz = () => {
  for (let i = 0; i <= 20; i++) {
    console.log(fzbz(i));
  }
};
fizzBuzz();


const fizzBuzzV2 = (num) => {
  for (let i = 0; i <= num; i++) {
    let str = '';
    if (i % 15 === 0) {
      str = 'FizzBuzz';
    } else if (i % 3 === 0) {
      str = 'Fizz';
    } else if (i % 5 === 0) {
      str += 'Buzz';
    }
    if (str === '') {
      str = i.toString();
    }
    console.log(str);
  }
};
fizzBuzzV2(20);

