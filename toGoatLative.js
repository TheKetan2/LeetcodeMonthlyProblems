/**
 * github: theketan2
 * https://leetcode.com/problems/goat-latin/
 * @param {string} S
 * @return {string}
 */
var toGoatLatin = function (S) {
  let sol = S.split(" ").map((word, index) => {
    if ("aeiouAEIOU".includes(word[0])) {
      return word + "m" + "a".repeat(index + 2);
    } else {
      return word.slice(1) + word[0] + "m" + "a".repeat(index + 2);
    }
  });
  return sol.join(" ");
};
