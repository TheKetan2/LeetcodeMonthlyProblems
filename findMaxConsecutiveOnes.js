/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let sanitized = nums.map((num) => (num === 1 ? 1 : 0));
  let sol = sanitized
    .join("")
    .split("0")
    .map((num) => num.length);
  return Math.max(...sol);
};
