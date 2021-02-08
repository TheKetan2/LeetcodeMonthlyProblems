/**
 * github: theketan2
 * https://leetcode.com/problems/find-the-highest-altitude/
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
  gain.unshift(0);
  for (let i = 1; i < gain.length; i++) {
    gain[i] += gain[i - 1];
  }
  console.log(gain);
  return Math.max(...gain);
};
