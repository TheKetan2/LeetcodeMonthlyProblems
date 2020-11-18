/**
 * https://leetcode.com/problems/middle-of-the-linked-list/
 * github: theketan2
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
var middleNode = function (head) {
  let sol = [];
  let temp = head;
  while (temp.next !== null) {
    sol.push(temp.val);
    temp = temp.next;
  }
  sol.push(temp.val);
  console.log(sol);
  let index = sol % 2 === 0 ? sol.length / 2 : Math.floor(sol.length / 2);
  temp = head;
  while (index--) {
    temp = temp.next;
  }

  return temp;
};
