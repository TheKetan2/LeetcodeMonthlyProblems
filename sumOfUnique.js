/**
 * github: theketan2
 * https://leetcode.com/problems/sum-of-unique-elements/
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function (nums) {
  let obj = {};
  let sum = 0;
  if (nums.length === 1) {
    return nums[0];
  }
  for (let i = 0; i < nums.length; i++) {
    let key = nums[i].toString();
    if (obj[key] !== undefined) {
      obj[key] += 1;
    } else {
      obj[key] = 1;
    }
  }
  if (Object.keys(obj).length === 1) {
    return sum;
  }

  Object.keys(obj).map((key) => {
    if (obj[key] === 1) {
      sum += Number(key);
    }
  });

  return sum;
};
