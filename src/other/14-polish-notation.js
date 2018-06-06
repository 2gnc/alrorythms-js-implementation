function calcPolish(expr) {
  const result = [];
  const operators = ['+', '-', '*', '/'];
  const atoms = expr.split(' ');
  atoms.forEach(atom => {
    if (!operators.includes(atom)) {
      result.push(atom);
    } else {
      const a = parseInt(result.shift(), 10);
      const b = parseInt(result.shift(), 10);
      switch (atom) {
        case '+':
          result.push(a + b);
          break;
        case '-':
          result.push(a - b);
          break;
        case '*':
          result.push(a * b);
          break;
        default:
          result.push(a / b);
          break;
      }
    }
  });
  return result.pop();
}

console.log(calcPolish('5 2 * 10 +'));
console.log(calcPolish('6 10 + 4 - 1 1 2 * + / 1 +'));
