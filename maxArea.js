/**
 * github: theketan2
 * https://leetcode.com/problems/container-with-most-water
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let sol = 0;
  let len = height.length;
  for (let i = 0; i < len; i++) {
    for (let j = len - 1; j > i; j--) {
      let water = (j - i) * Math.min(height[i], height[j]);
      sol = Math.max(water, sol);
    }
  }
  return sol;
};
