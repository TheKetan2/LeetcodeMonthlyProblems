/**
 * github: theketan2
 * https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/546/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let firstIndex = 0;
  let secondIndex = 0;
  for (var i = 0; i < nums.length; i++) {
    let index = nums.slice(i + 1).indexOf(target - nums[i]);
    if (index >= 0) {
      return [i, index + i + 1];
    }
  }
  return 0;
};
