/**
 * github: theketan2
 * https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/submissions/
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function (head) {
  let str = "";
  while (head.next !== null) {
    str += head.val;
    head = head.next;
  }
  str += head.val;
  // console.log(parseInt(str,2))
  return parseInt(str, 2);
};
