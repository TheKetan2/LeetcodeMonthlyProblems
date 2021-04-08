/**
 * github: theketan2
 * https://leetcode.com/explore/learn/card/fun-with-arrays/523/conclusion/3270/
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  const sol = [];
  for (let i = 1; i < 1 + nums.length; i++) {
    if (!nums.includes(i)) {
      sol.push(i);
    }
  }
  return sol;
};
