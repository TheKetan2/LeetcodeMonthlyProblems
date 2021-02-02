/**
 * github: theketan2
 * https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function (mat, k) {
  let sol = mat.map((m, i) => {
    let total = m.reduce((acc, curr) => acc + curr);
    return [i, total];
  });
  sol.sort((a, b) => Number(a[1]) - Number(b[1]));
  console.log(sol);
  return sol.slice(0, k).map((arr) => arr[0]);
};
