/**
 * https://leetcode.com/problems/rotate-array/
 * GitHub: Theketan2
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  while (k--) {
    nums.unshift(nums.pop());
  }
};

