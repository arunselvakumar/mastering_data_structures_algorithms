/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  const elementFrequencyDict = {};

  for (let i = 0; i < nums.length; i++) {
    elementFrequencyDict[nums[i]] = elementFrequencyDict[nums[i]] !== undefined ? elementFrequencyDict[nums[i]] + 1 : 1;
  }

  let maximumCount = 0;
  let maximumRepeatedElement = 0;

  for (const elementFrequencyDictKey in elementFrequencyDict) {
    if(elementFrequencyDict[elementFrequencyDictKey] > maximumCount) {
      maximumCount = elementFrequencyDict[elementFrequencyDictKey];
      maximumRepeatedElement = elementFrequencyDictKey;
    }
  }

  return maximumRepeatedElement;
};

console.log(majorityElement([1, 3, 3, 4, 4, 4, 4, 4, 3, 1]));
