/**
 * github: theketan2
 * https://leetcode.com/problems/shuffle-the-array/
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
  let sol = [];
  for (let i = 0; i < nums.length / 2; i++) {
    sol.push(nums[i]);
    sol.push(nums[i + n]);
  }
  return sol;
};
