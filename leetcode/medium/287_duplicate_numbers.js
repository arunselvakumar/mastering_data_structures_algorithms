/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
  let outputArray = [];

  for (let i = 0; i < nums.length; i++) {
    if(outputArray[nums[i]]) {
      return nums[i];
    } else {
      outputArray[nums[i]] = true;
    }
  }
};
