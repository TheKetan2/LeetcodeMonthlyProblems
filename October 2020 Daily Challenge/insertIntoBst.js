/*
https://leetcode.com/explore/challenge/card/october-leetcoding-challenge/559/week-1-october-1st-october-7th/3485/ 
github: theketan2
*/

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
 * @param {number} val
 * @return {TreeNode}
 */

var insertIntoBST = function (root, val) {
  if (!root) return new TreeNode(val);

  let currNode = root;
  while (currNode) {
    if (currNode.val < val) {
      if (currNode.right === null) {
        currNode.right = new TreeNode(val);
        break;
      } else {
        currNode = currNode.right;
      }
    } else {
      if (currNode.left === null) {
        currNode.left = new TreeNode(val);
        break;
      } else {
        currNode = currNode.left;
      }
    }
  }

  return root;
};
