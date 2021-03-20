/**
 * github: theketan2
 * https://leetcode.com/problems/duplicate-zeros/submissions/
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
  let temp = [];
  for (let elem of arr) {
    if (elem === 0) {
      temp.push(0);
      temp.push(0);
    } else {
      temp.push(elem);
    }
  }
  for (let i = 0; i < arr.length; i++) {
    arr[i] = temp[i];
  }
};
