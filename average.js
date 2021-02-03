/**
 * github: theketan2
 * https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary
 * @param {number[]} salary
 * @return {number}
 */
var average = function (salary) {
  salary.sort((a, b) => Number(a) - Number(b));
  salary.pop();
  salary.shift();
  return salary.reduce((acc, curr) => acc + curr) / salary.length;
};
