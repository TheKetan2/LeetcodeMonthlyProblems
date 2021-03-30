/**
 * github: theketan2
 * https://leetcode.com/problems/roman-to-integer/
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let map = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let sol = map[s[0]];
  for (let i = 1; i < s.length; i++) {
    sol += map[s[i]];
    if (map[s[i - 1]] < map[s[i]]) {
      sol -= map[s[i - 1]] * 2;
    }
  }
  return sol;
};
