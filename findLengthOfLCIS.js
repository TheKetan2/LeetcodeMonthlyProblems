/**
 * github: theketan2
 * https://leetcode.com/problems/longest-continuous-increasing-subsequence
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
  if (nums.length <= 1) {
    return nums.length;
  }
  let sol = 0;
  let temp = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      temp++;
    } else {
      temp = 1;
    }
    sol = Math.max(temp, sol);
  }
  return sol;
};
