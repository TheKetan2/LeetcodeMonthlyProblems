/**
 * https://leetcode.com/problems/detect-capital
 * github: theketan2
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
  return (
    word.toLowerCase() === word ||
    (word[0] === word[0].toUpperCase() &&
      (word.substr(1) === word.substr(1).toLowerCase() ||
        word.substr(1) === word.substr(1).toUpperCase()))
  );
};
