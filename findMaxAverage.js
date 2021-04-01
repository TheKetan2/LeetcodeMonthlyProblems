/**
 * github: theketan2
 * https://leetcode.com/problems/maximum-average-subarray-i
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  nums.push(0);
  let sol = [];
  for (let i = 0; i < nums.length - 1; i++) {
    let sum = 0;
    for (let j = i; j + 1 < nums.length; j++) {
      sum += nums[j];
      if (j - i + 1 == k) {
        sol.push(sum / k);
      }
    }
  }
  return Math.max(...sol);
};
