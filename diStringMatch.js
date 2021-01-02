/**
 * github: theketan2
 * https://leetcode.com/problems/di-string-match/
 * @param {string} S
 * @return {number[]}
 */
var diStringMatch = function (S) {
  let sol = [];
  let start = 0;
  let end = S.length;

  for (let ch of [...S]) {
    if (ch == "I") {
      sol.push(start);
      start += 1;
    } else {
      sol.push(end);
      end -= 1;
    }
  }
  for (let i = 0; i <= S.length; i++) {
    if (!sol.includes(i)) {
      sol.push(i);
      break;
    }
  }
  return sol;
};
