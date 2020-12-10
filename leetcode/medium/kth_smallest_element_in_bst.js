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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
  let outputArray = [];
  inOrderTraversal(root, outputArray);

  return outputArray.slice(0, k);
};

function inOrderTraversal(node, list) {
  if(node.left) {
    inOrderTraversal(node.left, list);
  }

  list.push(node.val);

  if(node.right) {
    inOrderTraversal(node.right, list);
  }
}

