/**
 * @param {string} s
 * @return {boolean}
 */

/*
 * https://leetcode.com/problems/valid-parentheses/submissions/
 * GiHub: TheKetan2
 */
var isValid = function (s) {
  let stack = [];
  for (char of [...s]) {
    if (!stack) {
      stack.push(char);
    } else {
      if (char === "]" && stack[stack.length - 1] === "[") {
        stack.pop();
      } else if (char === "}" && stack[stack.length - 1] === "{") {
        stack.pop();
      } else if (char === ")" && stack[stack.length - 1] === "(") {
        stack.pop();
      } else {
        stack.push(char);
      }
    }
  }
  console.log(stack);
  return stack.length === 0;
};

function isPositive(a) {
  throw new Error(a === 0 ? "Zero Error" : a < 0 ? "Negative Error" : "YES");
}
