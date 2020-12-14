const dp = {};
/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = (n) => {
  if(n in dp) {
    return dp[n];
  }

  if(n === 0) {
    return 0;
  }

  if(n === 1 || n === 2) {
    return 1;
  }

  dp[n] = tribonacci(n-1) + tribonacci(n-2) + tribonacci(n-3);
  return dp[n];
};

console.log(tribonacci(25));

