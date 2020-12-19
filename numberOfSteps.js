/**
 * https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/submissions/
 * github: theketan2
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
  let sol = 0;
  while (num !== 0) {
    if (num % 2 === 0) {
      num /= 2;
    } else {
      num -= 1;
    }
    sol++;
  }
  return sol;
};
