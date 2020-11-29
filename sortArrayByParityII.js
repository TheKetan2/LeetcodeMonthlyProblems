/**
 * https://leetcode.com/problems/sort-array-by-parity-ii
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function (A) {
  let odd = [],
    even = [],
    sol = [];
  A.forEach((num) => {
    if (num % 2 == 0) {
      even.push(num);
    } else {
      odd.push(num);
    }
  });
  for (let i in odd) {
    sol.push(even[i]);
    sol.push(odd[i]);
  }
  return sol;
};
