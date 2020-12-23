/**
 * github: theketan2
 * https://leetcode.com/problems/sum-of-all-odd-length-subarrays/
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i += 2) {
    for (let j = 0; j < arr.length - i; j++) {
      sum += arr.slice(j, j + i + 1).reduce((acc, curr) => acc + curr);
      console.log(arr.slice(j, j + i + 1));
    }
  }
  return sum;
};
