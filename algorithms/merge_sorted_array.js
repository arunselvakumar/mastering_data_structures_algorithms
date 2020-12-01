/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  const length = m + n - 1;
  let firstArrayIndex = m - 1;
  let secondArrayIndex = n - 1;

  for (let i = length; i >= 0; i--) {
    if (secondArrayIndex < 0) {
      break;
    }

    if(firstArrayIndex >= 0 && nums1[firstArrayIndex] > nums2[secondArrayIndex]) {
      nums1[i] = nums1[firstArrayIndex];
      firstArrayIndex = firstArrayIndex - 1;
    } else {
      nums1[i] = nums2[secondArrayIndex];
      secondArrayIndex = secondArrayIndex - 1;
    }
  }
}

let nums1 = [2, 0];
let nums2 = [1];

console.log(merge(nums1, 1, nums2, 1));

console.log(nums1);
