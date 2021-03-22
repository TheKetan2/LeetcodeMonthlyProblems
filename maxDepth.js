/**
 * github: theketan2
 * https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/
 * @param {string} s
 * @return {number}
 */
var maxDepth = function (s) {
  let temp = [];
  let sol = [0];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      temp.push(s[i]);
    } else if (s[i] === ")") {
      sol.push(temp.length);
      temp.pop();
    }
  }
  return Math.max(...sol);
};
