const fibonacchiR = num => {
  if (num < 3) return 1;
  return fibonacchiR(num - 1) + fibonacchiR(num - 2);
};

const fibonacciBine = num => {
  const sq5 = Math.sqrt(5);
  const a = (1 + sq5) / 2;
  const b = (1 - sq5) / 2;
  return ((a ** num) - (b ** num)) / sq5;
};

const fibonacciLoop = num => {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= num; i++) {
    const c = a + b;
    a = b;
    b = c;
  }
  return b;
};

module.exports.f1 = fibonacchiR;
module.exports.f2 = fibonacciBine;
module.exports.f3 = fibonacciLoop;
