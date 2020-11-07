/**
 * https://leetcode.com/problems/check-array-formation-through-concatenation
 * guthub: theketan2
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
var canFormArray = function (arr, pieces) {
  let sol = [];
  let temp = [].concat(arr).join(",");
  for (let piece of pieces) {
    let index = arr.indexOf(piece[0]);
    let spliceArr = arr.splice(index, piece.length);
    if (index !== -1) sol.push(spliceArr);
    else return false;
    console.log("sol: ", sol, "arr: ", arr);

    if (!temp.includes(spliceArr.join(","))) {
      console.log(temp, spliceArr.join(","));
      return false;
    }
  }
  return sol.flat().join(",") === pieces.flat().join(",");
};
