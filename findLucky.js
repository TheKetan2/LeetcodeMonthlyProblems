/**
 * https://leetcode.com/problems/find-lucky-integer-in-an-array
 * github: theketan2
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function (arr) {
  arr.sort((a, b) => b - a);
  for (let i = 0; i < arr.length; i++) {
    let len = arr.filter((num) => num === arr[i]).length;
    console.log(len, arr[i]);
    if (len === arr[i]) {
      return len;
    }
  }
  return -1;
};
