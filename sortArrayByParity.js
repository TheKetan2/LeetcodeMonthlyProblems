/**
 * https://leetcode.com/problems/sort-array-by-parity/
 * github: theketan2
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function (A) {
  let sol = [];
  let len = A.length - 1;
  for (let i = 0, j = len; i <= len; i++, j--) {
    if (A[j] % 2 === 0) sol.unshift(A[j]);
    if (A[i] % 2 !== 0) sol.push(A[i]);
  }
  return sol;
};
