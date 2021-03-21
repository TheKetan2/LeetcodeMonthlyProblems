/**
 *github: theketan2
 * https://leetcode.com/problems/decrypt-string-from-alphabet-to-integer-mapping/
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function (s) {
  let alpha = " abcdefghijklmnopqrstuvwxyz";
  let result = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i + 2] === "#") result += alpha[Number(s[i++] + s[i++])];
    else result += alpha[Number(s[i])];
  }
  return result;
};
