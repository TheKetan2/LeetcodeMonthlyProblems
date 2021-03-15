/**
 * github: theketan2
 * https://leetcode.com/problems/merge-strings-alternately/
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let sol = "";
  let max = Math.max(word1.length, word2.length);
  for (let i = 0; i < max; i++) {
    if (word1.length > i) {
      sol += word1[i];
    }
    if (word2.length > i) {
      sol += word2[i];
    }
  }
  return sol;
};
