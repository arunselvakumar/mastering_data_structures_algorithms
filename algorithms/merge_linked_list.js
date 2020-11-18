/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  let rootNode;
  let listNode;

  let headOfListNode1 = l1;
  let headOfListNode2 = l2;

  while (headOfListNode1 || headOfListNode2) {
    if(!headOfListNode1) {
      listNode.next = new ListNode(headOfListNode2.val, headOfListNode2.next)
      return listNode;
    }

    if(!headOfListNode2) {
      listNode.next = new ListNode(headOfListNode1.val, headOfListNode1.next)
      return listNode;
    }

    if(headOfListNode1.val <= headOfListNode2.val) {
      if(!rootNode) {
        listNode = new ListNode(headOfListNode1.val);
        rootNode = listNode;
      } else {
        listNode.next = new ListNode(headOfListNode1.val);
      }

      headOfListNode1 = headOfListNode1.next;
    } else {
      if(!rootNode) {
        listNode = new ListNode(headOfListNode2.val);
        rootNode = listNode;
      } else {
        listNode.next = new ListNode(headOfListNode2.val);
      }

      listNode = listNode.next;
      headOfListNode2 = headOfListNode2.next;
    }
  }

  return listNode;
};

 function ListNode(val, next) {
   this.val = (val === undefined ? 0 : val)
   this.next = (next === undefined ? null : next)
 }
