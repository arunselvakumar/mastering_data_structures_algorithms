// https://leetcode.com/problems/product-of-array-except-self/submissions/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = (nums) => {
  let length = nums.length;

  const leftProductArray = [];
  const rightProductArray = [];

  const outputArray = [];

  leftProductArray[0] = 1;
  rightProductArray[length - 1] = 1;

  for (let i = 1; i <= length - 1; i++) {
    leftProductArray[i] = leftProductArray[i - 1] * nums[i - 1];
  }

  for (let i = length - 2; i >= 0; i--) {
    rightProductArray[i] = rightProductArray[i + 1] * nums [i + 1];
  }

  for (let i = 0; i < length; i++) {
    outputArray[i] = leftProductArray[i] * rightProductArray[i];
  }

  return outputArray;
};

console.log(productExceptSelf([1, 2, 3, 4]));
