/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  if(!headA || !headB) {
    return null;
  }

  let pointer_A = headA;
  let pointer_B = headB;

  while (pointer_A !== pointer_B) {
    if(!pointer_A.next) {
      pointer_A.next = headB;
    } else {
      pointer_A = pointer_A.next;
    }

    if(!pointer_B.next) {
      pointer_B.next = headA;
    } else {
      pointer_B = pointer_B.next;
    }
  }
  
  return pointer_A;
};
