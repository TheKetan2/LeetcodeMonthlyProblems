/**
 * github: theketan2
 * https://leetcode.com/problems/reverse-string-ii/
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  let sol = "";
  for (let i = 0; i < s.length; i += k) {
    if ((i / k) % 2 == 0) sol += [...s.substr(i, k)].reverse().join("");
    else sol += s.substr(i, k);
  }
  return sol;
};
