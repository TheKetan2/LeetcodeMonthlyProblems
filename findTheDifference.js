/**
 * github: theketan2
 * https://leetcode.com/problems/find-the-difference
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  for (let ch of [...s]) {
    t = t.replace(ch, "");
  }
  return t;
};
