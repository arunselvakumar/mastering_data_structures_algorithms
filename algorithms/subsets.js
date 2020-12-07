/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  if(!nums || !nums.length) {
    return [[]]
  }

  const outputArray = [];
  for (let i = 0; i < nums.length; i++) {
    const itemToInsert = nums[i];

    const newSubsets = [];
    for (let j = 0; j < outputArray.length; j++) {
      newSubsets.push([...outputArray[j], itemToInsert]);
    }
    if(newSubsets.length) {
      newSubsets.forEach(x => outputArray.push(x));
    }
    outputArray.push([itemToInsert]);
  }

  outputArray.push([]);
  return outputArray;
};

console.log(subsets([1, 2, 3, 4]));
