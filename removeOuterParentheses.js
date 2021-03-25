/**
 * github: theketan2
 * https://leetcode.com/problems/remove-outermost-parentheses/
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function (S) {
  let counter = 0;
  let resultString = "";

  for (let i = 0; i < S.length; i++) {
    let char = S[i];
    if (char === ")") {
      if (counter === 1) {
        resultString += "";
      } else {
        resultString += char;
      }
      counter -= 1;
    }
    if (char === "(") {
      if (counter === 0) {
        resultString += "";
      } else {
        resultString += char;
      }
      counter += 1;
    }
    console.log(counter);
  }

  return resultString;
};
