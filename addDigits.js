/**
 *https://leetcode.com/problems/add-digits/
 *github: theketan2
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  while (true) {
    if (num < 10) return num;
    let numArr = num.toString().split("");
    num = numArr.reduce((acc, curr) => acc + parseInt(curr), 0);
  }
};
