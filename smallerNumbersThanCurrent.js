/**
 * github: theketan2
 * https://leetcode.com/problemshow-many-numbers-are-smaller-than-the-current-number/
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  let sol = [];
  for (let num of nums) {
    sol.push(nums.filter((n) => n < num).length);
  }
  return sol;
};
