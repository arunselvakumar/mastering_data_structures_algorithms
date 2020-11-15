/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  return root ? getDepthOfNode(root) : 0;
};

var getDepthOfNode = function (node) {
  var length = 1;

  if (!node) {
    return 0;
  }
  
  if (!node.left && !node.right) {
    return length;
  }
  
  var leftChildren = getDepthOfNode(node.left) + length;
  var rightChildren = getDepthOfNode(node.right) + length;
  return Math.max(leftChildren, rightChildren);
}