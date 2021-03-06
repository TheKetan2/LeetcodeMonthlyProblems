/**
 * gtihub: theketan2
 * https://leetcode.com/problems/set-mismatch
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
  nums.push(999999999999999);
  nums.sort((a, b) => Number(a) - Number(b));
  let sol = [];
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] == nums[i + 1]) {
      sol.unshift(nums[i]);
    }
    if (!nums.includes(i + 1)) {
      sol.push(i + 1);
    }
    if (sol.length === 2) {
      return sol;
    }
  }

  return [];
};
