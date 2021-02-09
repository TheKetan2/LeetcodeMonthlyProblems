/**
 * github : theketan2
 * https://leetcode.com/problems/xor-operation-in-an-array/
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function (n, start) {
  let sol = start;
  for (let i = 1; i < n; i++) {
    sol ^= start + 2 * i;
  }
  console.log(sol);
  return sol;
};
