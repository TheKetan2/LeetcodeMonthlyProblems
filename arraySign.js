/**
 * github: theketan2
 * https://leetcode.com/problems/sign-of-the-product-of-an-array/submissions/
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function (nums) {
  let sum = nums.reduce((acc, curr) => acc * curr, 1);
  console.log(sum);
  return sum < 0 ? -1 : sum > 0 ? 1 : 0;
};
