/**
 * https://leetcode.com/problems/shortest-distance-to-a-character
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
var shortestToChar = function (S, C) {
  let espot = [];
  let sol = [];
  for (let i = 0; i < S.length; i++) {
    if (S[i] === C) {
      espot.push(i);
    }
  }
  for (let i = 0; i < S.length; i++) {
    sol.push(Math.min(...espot.map((n) => Math.abs(n - i))));
  }
  return sol;
};
