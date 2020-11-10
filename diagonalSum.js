/**
 * https://leetcode.com/problems/matrix-diagonal-sum/
 * github: theketan2
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function (mat) {
  let sum = 0;
  for (let i = 0, j = 0, k = mat.length - 1; i < mat.length; i++, j++, k--) {
    sum += mat[i][j];
    sum += mat[k][j];
  }
  if (mat.length % 2 === 0) return sum;
  let index = Math.floor(mat.length / 2);
  return sum - mat[index][index];
};
