/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function(nums) {
  let maxSum = nums[0];
  let currentSum = maxSum;

  for (let i = 1; i < nums.length; i++) {
    currentSum = currentSum + nums[i];

    if(nums[i] > currentSum) {
      currentSum = nums[i];
    }

    if(currentSum > maxSum) {
      maxSum = currentSum;
    }
  }

  return maxSum;
};

console.log(maxSubArray([1]));
