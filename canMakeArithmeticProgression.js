/**
 * github: theketan2
 * https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence/
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function (arr) {
  arr.sort((a, b) => a - b);
  console.log(arr);
  for (let i = 1; i < arr.length; i++) {
    let diff = arr[1] - arr[0];
    if (arr[i] - arr[i - 1] !== diff) {
      return false;
    }
  }
  return true;
};
