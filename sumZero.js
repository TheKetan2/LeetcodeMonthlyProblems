/**
 * github: theketan2
 * https://leetcode.com/problems/find-n-unique-integers-sum-up-to-zero/
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function (n) {
  let sol = [];
  if (n % 2) {
    sol.push(0);
  }

  for (let i = 1; i <= n / 2; i++) {
    sol.push(i);
    sol.push(-i);
  }

  return sol;
};
