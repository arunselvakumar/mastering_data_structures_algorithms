/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
  if(!head) {
    return null;
  }

  let oddNodes = head;
  const evenNode = oddNodes.next;

  const nextNode = head;
  while (nextNode) {
    evenNode.next = nextNode.next;
  }

  return head;
};
