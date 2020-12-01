/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  const palindromeArray = [];
  if (!head) {
    return true;
  }

  while(head) {
    palindromeArray.push(head.val);
    head = head.next;
  }

  let midPoint = Math.floor(palindromeArray.length / 2);

  for (let i = 0; i <= midPoint; i++) {
    if (palindromeArray[i] !== palindromeArray[palindromeArray.length - 1 - i]) {
      return false;
    }
  }

  return true;
};
