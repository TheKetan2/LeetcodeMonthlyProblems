/**
 * github: theketan2
 * https://leetcode.com/problems/maximum-ice-cream-bars/submissions/
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function (costs, coins) {
  let sol = 0;
  costs.sort((a, b) => a - b);
  let i = 0;
  while (coins && i < costs.length) {
    coins -= costs[i];
    if (coins >= 0) {
      sol++;
    }
    i++;
  }
  return sol;
};
