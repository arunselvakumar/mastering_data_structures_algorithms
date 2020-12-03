/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  const primeArray = [];
  for (let i = 0; i < n; i++) {
    primeArray[i] = true;
  }

  for (let i = 2; i * i < n; i++) {
    if(primeArray[i]) {
      for (let j = 2; i * j < n; j++) {
        primeArray[i * j] = false;
      }
    }
  }

  let primeNumbersCount = 0;
  for (let i = 2; i < n; i++) {
    if(primeArray[i]) {
      primeNumbersCount = primeNumbersCount + 1;
    }
  }

  return primeNumbersCount;
};

console.log(countPrimes(10));
