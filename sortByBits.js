/**
 * github: theketan2
 * https://leetcode.com/problems/sort-integers-by-the-number-of-1-bits
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function (arr) {
  arr.sort((a, b) => Number(a) - Number(b));
  arr.sort((a, b) => {
    aOne = a
      .toString(2)
      .split("")
      .map((num) => Number(num))
      .reduce((acc, curr) => acc + curr);
    bOne = b
      .toString(2)
      .split("")
      .map((num) => Number(num))
      .reduce((acc, curr) => acc + curr);
    return aOne - bOne;
  });
  return arr;
};
