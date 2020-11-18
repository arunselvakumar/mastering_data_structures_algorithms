/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  let originalSum = 0;
  let computedSum = 0;

  for (let i = 0; i < nums.length; i++) {
    originalSum = originalSum + (i+1);
    computedSum = computedSum + nums[i];
  }

  return originalSum - computedSum;
};

console.log(missingNumber([9,6,4,2,3,5,7,0,1]));
