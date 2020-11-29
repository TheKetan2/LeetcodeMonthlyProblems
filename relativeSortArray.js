/**
 * https://leetcode.com/problems/relative-sort-array
 * github: theketan2
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
  let sol = [];
  for (let num of arr2) {
    let temp = arr1.filter((a) => a === num);
    sol = [...sol, ...temp];
    console.log(sol);
    arr1 = arr1.filter((a) => a !== num);
    console.log(arr1);
  }
  arr1.sort((a, b) => parseInt(a) - parseInt(b));
  sol = [...sol, ...arr1];
  return sol;
};
