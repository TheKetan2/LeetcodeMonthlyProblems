/**
 * https://leetcode.com/problems/distribute-candies
 * github: theketan2
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function (candyType) {
  let set = new Set(candyType);
  return candyType.length / 2 >= set.size ? set.size : candyType.length / 2;
};
