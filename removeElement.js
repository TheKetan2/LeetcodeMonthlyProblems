/**
 * https://leetcode.com/explore/learn/card/fun-with-arrays/511/in-place-operations/3575/
 * github: theketan2
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      i--;
      // console.log(nums)
    }
  }

  return nums.length;
};
