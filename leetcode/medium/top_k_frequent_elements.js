/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  if(!nums || !nums.length) {
    return [];
  }

  const dict = {};
  const outputArray = [];

  nums = nums.sort(((a, b) => a - b));

  for (let i = 0; i < nums.length; i++) {
    if(nums[i] in dict) {
      dict[nums[i]] = dict[nums[i]] + 1;
    } else {
      dict[nums[i]] = 1;
    }
  }

  // const orderedDict =

  console.log(dict);

  return outputArray;
};

console.log(topKFrequent([1,1,1,2,2,3, 5, 5, 5, 5, 5], 2));
