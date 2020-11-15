/**
 * https://leetcode.com/problems/array-partition-i
 * github: theketan2
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
  nums.sort((a, b) => parseInt(a) - parseInt(b));
  let sol = 0;
  console.log(nums);
  for (let i = 0; i < nums.length; i += 2) {
    sol += nums[i];
  }
  return sol;
};
