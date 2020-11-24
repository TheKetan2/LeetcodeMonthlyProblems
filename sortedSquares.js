/**
 * https://leetcode.com/problems/squares-of-a-sorted-array
 * github: theketan2
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function (A) {
  return A.map((a) => a * a).sort((a, b) => parseInt(a) - parseInt(b));
};
