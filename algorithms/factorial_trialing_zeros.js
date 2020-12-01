const dp = {};

/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
  let numberOfTrailingZeros = 0;

  while(n >= 5) {
    numberOfTrailingZeros += Math.floor(n / 5);
    n = Math.floor(n / 5);
  }

  return numberOfTrailingZeros;
};
