/**
 * https://leetcode.com/problems/sort-array-by-increasing-frequency/
 * github: theketan2
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function (nums) {
  nums.sort((a, b) => parseInt(b) - parseInt(a));
  let obj = {};
  console.log(nums);
  for (let num of nums) {
    if (obj[num] === undefined) {
      obj[num] = 1;
    } else {
      obj[num] += 1;
    }
  }
  console.log(obj);
  let sol = Object.entries(obj)
    .sort((a, b) => {
      if (parseInt(a[1]) === parseInt(b[1])) {
        return parseInt(b[0]) - parseInt(a[0]);
      } else {
        return parseInt(a[1]) - parseInt(b[1]);
      }
    })
    .reduce(
      (acc, curr) => [
        ...acc,
        ...Array.from({ length: curr[1] }, () => parseInt(curr[0])),
      ],
      []
    );
  console.log(sol);
  return sol;
};
