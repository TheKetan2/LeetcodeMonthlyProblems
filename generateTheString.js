/**
 * github: theketan2
 * https://leetcode.com/problems/generate-a-string-with-characters-that-have-odd-counts/submissions/
 * @param {number} n
 * @return {string}
 */
var generateTheString = function (n) {
  if (n % 2 === 0) {
    return "a".repeat(n - 1) + "b";
  } else {
    return "a".repeat(n);
  }
};
