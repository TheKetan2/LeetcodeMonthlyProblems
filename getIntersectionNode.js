/**
 * github: theketan2
 * https://leetcode.com/problems/intersection-of-two-linked-lists/
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
var getIntersectionNode = function (headA, headB) {
  let currA = headA;
  let currB = headB;
  while (currA !== currB) {
    if (currA === currB) return currA;
    if (currA) {
      currA = currA.next;
    } else {
      currA = headB;
    }

    if (currB) {
      currB = currB.next;
    } else {
      currB = headA;
    }
  }
  return currA;
};
