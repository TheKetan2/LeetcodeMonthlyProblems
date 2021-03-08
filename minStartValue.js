/**
 * github: theketan2
 * https://leetcode.com/problems/minimum-value-to-get-positive-step-by-step-sum
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function (nums) {
  let max = 1;
  while (true) {
    let val = max;
    let temp = nums.filter((num) => {
      val += num;
      return val >= 1;
    });
    if (temp.length === nums.length) {
      return max;
    }
    max++;
  }
};
