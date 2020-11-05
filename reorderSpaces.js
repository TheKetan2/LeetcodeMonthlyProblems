/**
 * https://leetcode.com/problems/rearrange-spaces-between-words
 * github: theketan2
 * @param {string} text
 * @return {string}
 */
var reorderSpaces = function (text) {
  let totalSpaces = text.length - text.replace(/[ ]/gi, "").length;
  let wordsArr = text.split(" ").filter((word) => word !== "");
  if (wordsArr.length === 1) {
    return wordsArr[0] + " ".repeat(totalSpaces);
  }
  let remainingSpaces = totalSpaces % (wordsArr.length - 1);
  let equalSpaces = Math.floor(totalSpaces / (wordsArr.length - 1));
  let spacecBetween = " ".repeat(equalSpaces);
  let lastSpaces = " ".repeat(remainingSpaces);

  return wordsArr.join(spacecBetween) + lastSpaces;
};
