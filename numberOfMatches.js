/**
 * https://leetcode.com/problems/count-of-matches-in-tournament/
 * github: theketan2
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function (n) {
  let matches = 0;
  let reminder = 0;
  while (n) {
    n += reminder;
    reminder = n % 2;

    if (reminder) {
      n = (n - 1) / 2;
    } else {
      n /= 2;
    }
    matches += n;
  }
  return matches;
};
