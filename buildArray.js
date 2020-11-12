/**
 * https://leetcode.com/problems/build-an-array-with-stack-operations/
 * github: theketan2
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function (target, n) {
  let arr = [];
  for (let i = 1; i <= target[target.length - 1]; i++) {
    arr.push("Push");
    if (!target.includes(i)) arr.push("Pop");
  }
  return arr;
};
