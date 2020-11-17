/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
  const newArray = [];
  
  for (let index = 0; index < (nums.length / 2); index++) {
    newArray.push(nums[index]);
    newArray.push(nums[(nums.length / 2) + index]);
  }

  return newArray;
};