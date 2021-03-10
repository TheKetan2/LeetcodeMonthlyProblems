/**
 * github: theketan2
 * https://leetcode.com/problems/count-items-matching-a-rule/
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function (items, ruleKey, ruleValue) {
  let sol = 0;
  let ruleIndex = ["type", "color", "name"].indexOf(ruleKey);
  for (let elem of items) {
    if (elem[ruleIndex] === ruleValue) {
      sol++;
    }
  }
  return sol;
};
