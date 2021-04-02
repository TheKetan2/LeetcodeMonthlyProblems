/**
 * github: theketan2
 * https://leetcode.com/problems/palindrome-linked-list/submissions/
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
var isPalindrome = function (head) {
  let sol = [];
  // console.log(head.val)
  while (head.next !== null) {
    sol.push(head.val);
    head = head.next;
  }
  sol.push(head.val);
  // console.log(sol)
  for (let i = 0, j = sol.length - 1; i < j; i++, j--) {
    if (sol[i] !== sol[j]) {
      return false;
    }
  }
  return true;
};
