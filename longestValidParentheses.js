/**
 * github: theketan2
 * https://leetcode.com/problems/longest-valid-parentheses/submissions/
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  let arr = [-1];
  let sol = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      arr.push(i);
    } else if (arr.length === 1) {
      arr[0] = i;
    } else {
      arr.pop();
      sol = Math.max(sol, i - arr[arr.length - 1]);
    }
  }
  return sol;
};
