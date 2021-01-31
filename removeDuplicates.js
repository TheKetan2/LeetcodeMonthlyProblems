/**
 * github: theketan2
 * https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function (S) {
  let sol = [];
  for (let i = 0; i < S.length; i++) {
    if (sol.length === 0) {
      sol.push(S[i]);
    } else {
      if (sol[sol.length - 1] == S[i]) {
        sol.pop();
      } else {
        sol.push(S[i]);
      }
    }
  }
  return sol.join("");
};
