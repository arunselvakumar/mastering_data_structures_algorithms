/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function(nums) {
  if(!nums || !nums.length) {
    return null;
  }

  const maxArray = function (startIndex, endIndex) {
    if(endIndex > nums.length - 1) {
      return nums[endIndex - 1];
    }

    let sum = 0;

    for (let i = startIndex; i <= endIndex; i++) {
      sum = sum + nums[i];
    }

    return Math.max(sum, maxArray(startIndex, endIndex + 1));
  }

  let maxSum = -2147483647;
  for (let i = 0; i < nums.length; i++) {
    maxSum = Math.max(maxSum, maxArray(i, i));
  }

  return maxSum;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
