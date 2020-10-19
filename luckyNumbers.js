/**
 * url: https://leetcode.com/problems/lucky-numbers-in-a-matrix/
 * github: theketan2
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers = function (matrix) {
  let sol = [];
  for (let arr of matrix) {
    let min = Math.min(...arr);
    console.log(min);
    let index = arr.indexOf(min);
    let tempArr = [];
    for (let i = 0; i < matrix.length; i++) {
      tempArr.push(matrix[i][index]);
    }
    console.log(tempArr);
    if (min === Math.max(...tempArr)) sol.push(min);
  }
  return sol;
};
