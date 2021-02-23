/**https://leetcode.com/problems/last-stone-weight
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  stones.sort((a, b) => b - a);
  while (stones.length >= 2) {
    stones = [stones[0] - stones[1], ...stones.slice(2)];
    stones.sort((a, b) => b - a);
  }
  console.log(stones.filter((num) => num !== 0));
  let sol = stones.filter((num) => num !== 0);
  return sol.length ? sol[0] : 0;
};
