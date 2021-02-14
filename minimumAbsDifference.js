/**
 * github: theketan2
 * https://leetcode.com/problems/minimum-absolute-difference/
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function (arr) {
  let sol = [];
  arr.sort((a, b) => Number(a) - Number(b));
  let min = 99999999;
  for (let i = 1; i < arr.length; i++) {
    min = Math.min(arr[i] - arr[i - 1], min);
  }
  console.log(min);

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] === min) {
      sol.push([arr[i - 1], arr[i]]);
    }
  }

  return sol;
};
