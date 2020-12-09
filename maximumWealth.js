/**
 * github: theketan2
 * https://leetcode.com/problems/richest-customer-wealth/submissions/
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  let sol = 0;
  for (let arr of accounts) {
    let total = arr.reduce((acc, curr) => acc + curr);
    if (sol < total) sol = total;
  }
  return sol;
};
