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
  if (!root) {
    return new TreeNode(val);
  } else {
    let currentNode = root;
    while (currentNode) {
      if (currentNode.val < val) {
        if (currentNode.right === null) {
          currentNode.right = new TreeNode(val);
          break;
        } else {
          currentNode = currentNode.right;
        }
      } else {
        if (currentNode.left === null) {
          currentNode.left = new TreeNode(val);
          break;
        } else {
          currentNode = currentNode.left;
        }
      }
    }
  }

  return root;
};
