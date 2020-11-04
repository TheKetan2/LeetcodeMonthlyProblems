/**
 * https://leetcode.com/problems/kth-missing-positive-number/submissions/
 * github: theketan2
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function (arr, k) {
  let i = 1;
  while (i) {
    if (!arr.includes(i)) {
      k--;
      if (!k) break;
    }
    i++;
  }
  return i;
};
