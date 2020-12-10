const backTrack = (nums, tempArray, result, start, end) => {
  if(tempArray.length > end) {
    return;
  }

  result.push([...tempArray]);

  for (let i = start; i < end; i++) {
    tempArray.push(nums[i]);
    backTrack(nums, tempArray, result, i + 1, end);
    tempArray.splice((tempArray.length - 1), 1);
  }
}

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  var result = [];

  backTrack(nums, [], result, 0, nums.length)

  return result;
}

console.log(subsets([1,2,3]));

/*
  Input: nums = [1,2,3]
  Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
 */

/*
[]
[1]
[1,2]
[1,2,3]
*/
