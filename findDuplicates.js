/**
 * github: theketan2
 * https://leetcode.com/problems/find-all-duplicates-in-an-array
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
  nums.sort((a, b) => Number(a) - Number(b));
  let sol = [];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] === nums[i]) {
      sol.push(nums[i]);
    }
  }
  return sol;
};
