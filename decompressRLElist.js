/**
 * github: theketan2
 * https://leetcode.com/problems/decompress-run-length-encoded-list/
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function (nums) {
  let sol = [];
  for (let i = 1; i < nums.length; i += 2) {
    let temp = Array.from({ length: nums[i - 1] }, () => nums[i]);
    sol = [...sol, ...temp];
  }
  return sol;
};
