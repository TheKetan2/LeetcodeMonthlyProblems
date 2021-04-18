/**
 * github: theketan2
 * https://leetcode.com/problems/check-if-the-sentence-is-pangram/submissions/
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function (sentence) {
  let alpha = "abcdefghijklmnopqrstuvwxyz";
  for (let char of [...alpha]) {
    if (!sentence.includes(char)) {
      return false;
    }
  }
  return true;
};
