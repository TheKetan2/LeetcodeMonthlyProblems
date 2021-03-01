/**
 * https://leetcode.com/problems/three-consecutive-odds/
 * github: theketan2
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function (arr) {
  for (let i = 0; i < arr.length - 2; i++) {
    console.log(arr.slice(i, i + 3));
    if (arr.slice(i, i + 3).filter((num) => num % 2 !== 0).length === 3) {
      return true;
    }
  }
  return false;
};
