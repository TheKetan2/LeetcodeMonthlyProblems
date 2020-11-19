/**
 * https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side
 * github: theketan2
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
  let sol = [];
  for (let i = 0; i < arr.length; i++) {
    let max = Math.max(...arr.slice(i + 1));
    sol.push(isFinite(max) ? max : -1);
  }
  return sol;
};
