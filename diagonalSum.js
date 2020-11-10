/**
 * https://leetcode.com/problems/matrix-diagonal-sum/
 * github: theketan2
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function (mat) {
  let sum = 0;
  for (let i = 0, j = 0; i < mat.length; i++, j++) {
    sum += mat[i][j];
  }
  for (let i = mat.length - 1, j = 0; i >= 0; i--, j++) {
    sum += mat[i][j];
  }
  if (mat.length % 2 === 0) return sum;
  let index = Math.floor(mat.length / 2);
  return sum - mat[index][index];
};
