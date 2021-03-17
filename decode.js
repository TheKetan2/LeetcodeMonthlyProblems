/**
 * github: theketan2
 * https://leetcode.com/problems/decode-xored-array/submissions/
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function (encoded, first) {
  let sol = [first];
  encoded.forEach((num, i) => sol.push(sol[i] ^ num));
  return sol;
};
