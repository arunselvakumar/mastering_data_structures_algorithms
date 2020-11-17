/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let profit = 0;
  for (let i = 0; i < prices.length; i++) {
    if(prices[i] < prices[i + 1] && (i+1) < prices.length) {
      profit = profit + (prices[i+1] - prices[i]);
    }
  }

  return profit;
};

console.log(maxProfit([1,2,3,4,5]));
