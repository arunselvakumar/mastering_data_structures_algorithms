/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  let previousCount = 0;
  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    nums[index] = nums[index] + previousCount;
    previousCount = previousCount + element;
  }

  return nums;
};