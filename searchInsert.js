/**
 * github: theketan2
 * https://leetcode.com/problems/search-insert-position/submissions/
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  nums.push(target);
  nums.sort((a, b) => Number(a) - Number(b));
  return nums.indexOf(target);
};
