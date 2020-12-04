/**
 * https://leetcode.com/problems/reshape-the-matrix
 * github: theketan2
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (nums, r, c) {
  let sol = [];
  if (r * c !== nums.length * nums[0].length) return nums;
  nums = nums.flat();
  for (let i = 0, k = 0; i < r; i++) {
    let temp = [];
    for (let j = 0; j < c; j++) {
      temp.push(nums[k]);
      k++;
    }
    sol.push(temp);
  }
  return sol;
};
