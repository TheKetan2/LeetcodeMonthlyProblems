/**
 * https://leetcode.com/problems/fibonacci-number/
 * github: theketan2
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  // 0 1 1 2 3 5 8 13 21
  sol = [0, 1, 1, 2, 3, 5];
  if (n < sol.length) {
    return sol[n];
  }
  console.log("hello");
  while (sol.length != n + 1) {
    let len = sol.length;
    console.log(sol);
    sol.push(sol[len - 1] + sol[len - 2]);
  }
  console.log(sol);
  return sol[n];
};
