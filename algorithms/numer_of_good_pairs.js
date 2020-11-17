/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs1 = function(nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if(nums[i] === nums[j]) {
        count++;
      }
    }
  }

  return count;
};

var numIdenticalPairs2 = function(nums) {
  let i = 0;
  let count = 0;
  const sortedArray = nums.sort();

  for (let j = 1; j < sortedArray.length; j++) {
    if(sortedArray[i] === sortedArray[j]) {
      count = count + (j - i);
    } else {
      i = j;
    }
  }

  return count;
};

const result = numIdenticalPairs2([1,2,3,1,1,3]);
console.log(result);
