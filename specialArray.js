/**
 * https://leetcode.com/problems/special-array-with-x-elements-greater-than-or-equal-x
 * github: theketan2
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function (nums) {
  let max = Math.max(...nums);
  let luckyNum = -1;
  for (let i = 0; i <= max; i++) {
    let len = nums.filter((num) => num >= i).length;
    console.log(len);
    if (i === len) {
      luckyNum = i;
    }
  }
  return luckyNum;
};
