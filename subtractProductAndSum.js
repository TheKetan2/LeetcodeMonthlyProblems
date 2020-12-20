/**
 * https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer
 * github: theketan2
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
  let sum = 0,
    mult = 1;
  while (n) {
    let last = n % 10;
    sum += last;
    mult *= last;
    n = Math.floor(n / 10);
  }
  console.log(sum, mult);
  return mult - sum;
};
