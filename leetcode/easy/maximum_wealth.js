/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
  let maxValue = 0;

  for (let i = 0; i < accounts.length; i++) {
    const sumOfArray = accounts[i].reduce((a, b) => a + b, 0);
    if(maxValue < sumOfArray) {
      maxValue = sumOfArray;
    }
  }

  return maxValue;
};
