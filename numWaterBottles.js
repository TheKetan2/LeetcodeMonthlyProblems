/**
 * https://leetcode.com/problems/water-bottles/submissions/
 * github: theketan2
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function (numBottles, numExchange) {
  let sol = numBottles;
  while (numBottles >= numExchange) {
    let temp = Math.floor(numBottles / numExchange);
    sol += temp;
    numBottles = temp + (numBottles % numExchange);
  }
  return sol;
};
