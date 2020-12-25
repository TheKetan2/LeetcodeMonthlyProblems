/**
 * github: theketan2
 * https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  nums.sort((a, b) => a - b);
  console.log(nums);
  let len = nums.length - 1;
  return (nums[len] - 1) * (nums[len - 1] - 1);
};
