/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  if (nums == null || nums.Length == 1) {
    return;
  }

  let i = 0, k = 0;

  while (i < nums.length)
  {
    if (nums[i] !== 0)
    {
      if (nums[k] === 0)
      {
        nums[k] = nums[i];
        nums[i] = 0;
      }
      k++;
    }
    i++;
  }
};

const inputArray = [0,1,0,3,12];
moveZeroes(inputArray);
console.log(inputArray);
