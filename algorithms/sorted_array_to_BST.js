/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  if(!nums || !nums.length) {
    return null;
  }

  return getBSTFromSortedArray(nums, 0, nums.length - 1);
};

var getBSTFromSortedArray = (nums, leftIndex, rightIndex) => {
  if (leftIndex > rightIndex) {
    return null;
  }

  const middleIndex = Math.round(leftIndex + (rightIndex - leftIndex) / 2);

  const node = new TreeNode(nums[middleIndex])

  node.left = getBSTFromSortedArray(nums, leftIndex, middleIndex - 1);
  node.right = getBSTFromSortedArray(nums, middleIndex + 1, rightIndex);

  return node;
}

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

console.log(sortedArrayToBST([-10, -3, 0, 5, 9]));
