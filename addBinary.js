/**
 * did not coded today,
 * need to rescedule tasks now
 * github: theketan2
 * https://leetcode.com/problems/add-binary/submissions/
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  return (BigInt("0b" + a) + BigInt("0b" + b)).toString(2);
};
