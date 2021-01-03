/**
 * https://leetcode.com/problems/split-a-string-in-balanced-strings/
 * github: theketan2
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
  let bal = 0;
  let sol = 0;
  for (let ch of [...s]) {
    if (ch === "L") {
      bal--;
    } else {
      bal++;
    }
    if (bal == 0) {
      sol++;
    }
  }
  return sol;
};
