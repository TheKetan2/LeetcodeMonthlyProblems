/**
 * github: theketan2
 * https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/674/
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  let sol = [];
  for (let i = 0; i < nums2.length; i++) {
    let index = nums1.indexOf(nums2[i]);
    if (index >= 0) {
      sol.push(nums2[i]);
      nums1.splice(index, 1);
    }
  }
  return sol.sort();
};
