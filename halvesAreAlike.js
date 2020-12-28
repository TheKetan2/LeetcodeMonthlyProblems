/**
 * https://leetcode.com/problems/determine-if-string-halves-are-alike/
 * github: theketan2
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function (s) {
  let len = s.length / 2;
  let [w1, w2] = [s.substr(0, len), s.substr(len)];
  return (
    w1.toLowerCase().replace(/[^aeiou]/g, "").length ===
    w2.toLowerCase().replace(/[^aeiou]/g, "").length
  );
};
