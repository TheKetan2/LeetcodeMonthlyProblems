/**
 * url: https://leetcode.com/problems/minimum-subsequence-in-non-increasing-order/submissions/
 * github: theketan2
 * @param {number[]} nums
 * @return {number[]}
 */
var minSubsequence = function (nums) {
  nums.sort((a, b) => parseInt(b) - parseInt(a));
  let sum = nums.reduce((acc, curr) => acc + curr);
  for (let i = 1; i < nums.length; i++) {
    let subSum = nums.slice(0, i).reduce((acc, curr) => acc + curr);
    if (subSum > sum - subSum) {
      return nums.splice(0, i);
    }
  }
  return nums;
};
