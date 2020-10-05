/**
 * https://leetcode.com/explore/challenge/card/october-leetcoding-challenge/559/week-1-october-1st-october-7th/3482/
 * Github: theketan
 */
var findPairs = function (nums, k) {
  sol = 0;
  numSet = [...new Set(nums)];
  console.log(nums);
  if (k === 0) {
    for (num of numSet) {
      console.log(num);
      if (nums.filter((n) => n === num).length > 1) {
        sol++;
      }
    }
    return sol;
  }
  if (k > 0) {
    for (num of numSet) {
      if (numSet.includes(num + k)) {
        sol++;
      }
    }
  }

  return sol;
};
