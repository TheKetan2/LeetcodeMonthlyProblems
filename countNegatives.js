/**
 * https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/submissions/
 * GitHub: theketan2
 */
var countNegatives = function (grid) {
  let count = 0;
  for (arr of grid) {
    count += arr.filter((num) => num < 0).length;
  }
  return count;
};
