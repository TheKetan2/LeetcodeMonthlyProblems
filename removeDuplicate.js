/**
 * github: theketan2
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  for (let i = 1; i < nums.length; i++) {
    if (nums.slice(0, i).includes(nums[i])) {
      nums.splice(i, 1);
      i--;
    }
  }
  return nums.length;
};
