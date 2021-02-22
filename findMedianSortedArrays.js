/**
 * github: theketan2
 * https://leetcode.com/problems/median-of-two-sorted-arrays/
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  nums1 = [...nums1, ...nums2];
  let sol = 0;
  nums1.sort((a, b) => Number(a) - Number(b));
  console.log(nums1);
  if (nums1.length % 2 == 0) {
    let len = nums1.length / 2;
    sol = (nums1[len - 1] + nums1[len]) / 2;
  } else {
    let len = Math.floor(nums1.length / 2);
    sol = nums1[len];
  }
  return sol;
};
