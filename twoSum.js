/**
 * github: theketan2
 * https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  for (let i = 0; i < numbers.length - 1; i++) {
    let index = numbers.slice(i + 1).indexOf(target - numbers[i]);
    if (index >= 0) {
      return [i + 1, i + 2 + index];
    }
  }
};
