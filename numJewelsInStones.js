/**
 * https://leetcode.com/problems/jewels-and-stones
 * github: theketan2
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function (J, S) {
  let sol = 0;
  for (let ch of [...S]) {
    if (J.includes(ch)) {
      sol++;
    }
  }

  return sol;
};
