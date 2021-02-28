/**
 * github: theketan2
 * https://leetcode.com/problems/plus-one
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let last = BigInt(digits.join("")) + 1n;
  let sol = [...last.toString()].map((num) => Number(num));
  return sol;
};
