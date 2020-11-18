/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = function (nums1, nums2) {
  const dict = {};
  const outputPair = [];

  for (let i = 0; i < nums1.length; i++) {
    if (nums1[i] in dict) {
      dict[nums1[i]] = dict[nums1[i]] + 1;
    } else {
      dict[nums1[i]] = 1;
    }
  }

  for (let i = 0; i < nums2.length; i++) {
    if (nums2[i] in dict && dict[nums2[i]] > 0) {
      outputPair.push(nums2[i]);
      dict[nums2[i]] = dict[nums2[i]] - 1;
    }
  }

  return outputPair;
};

console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));
