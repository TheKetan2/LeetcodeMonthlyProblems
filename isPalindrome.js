/**
 * github: theketan2
 * https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/883/
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let str = s.toLowerCase().replace(/[^a-z0-9]+/gi, "");
  return str === str.split("").reverse().join("");
};
