/**
 * github: theketan2
 * https://leetcode.com/problems/add-binary/submissions/
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  return (BigInt("0b" + a, 2) + BigInt("0b" + b, 2)).toString(2);
};
