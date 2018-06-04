const sieveOfEratosthenes = n => {
  const primes = [];
  for (let i = 0; i <= n; i++) {
    primes[i] = true;
  }

  primes[0] = false;
  primes[1] = false;

  for (let k = 2; k <= Math.sqrt(n); k++) {
    for (let j = 2; k * j <= n; j++) {
      primes[k * j] = false;
    }
  }

  const result = [];
  for (let i = 0; i < primes.length; i++) {
    if (primes[i]) result.push(i);
  }

  return result;
};

console.log(sieveOfEratosthenes(49));
module.exports = sieveOfEratosthenes;

// O(n);
