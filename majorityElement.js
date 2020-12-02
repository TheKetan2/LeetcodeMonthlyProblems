/**
 * https://leetcode.com/problems/majority-element/
 * github: theketan2
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let obj = {};
  let max = 0,
    sol = null;

  for (let num of nums) {
    if (obj[num] === undefined) {
      obj[num] = 1;
      if (max < obj[num]) {
        max = obj[num];
        sol = num;
      }
    } else {
      obj[num] += 1;
      if (max < obj[num]) {
        max = obj[num];
        sol = num;
      }
    }
  }
  return sol;
};
