/**
 * https://leetcode.com/problems/largest-substring-between-two-equal-characters
 * github: theketan2
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function (s) {
  if (new Set([...s]).size === s.length) return -1;
  let sol = 0;

  for (let i = 0; i < s.length; i++) {
    let lastIndex = s.lastIndexOf(s[i]) - 1;
    let string = s.substr(i + 1, lastIndex - i);
    let len = string.length;
    if (len > sol) {
      sol = len;
    }
  }

  return sol;
};
