/**
 * https://leetcode.com/problems/self-dividing-numbers/
 * github: theketan2
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
  let sol = [];
  for (let i = left; i <= right; i++) {
    let flag = true;
    for (let num of i.toString().split("")) {
      if (i % parseInt(num) !== 0) {
        flag = false;
        break;
      }
    }
    if (flag) sol.push(i);
  }
  return sol;
};

/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function (A) {
  let first = A[0].split("").sort();
  let sol = [];
  if (A.length === 1) return first;
  for (let ch of first) {
    let flag = true;
    for (let i = 1; i < A.length; i++) {
      let index = A[i].indexOf(ch);
      if (index === -1) {
        flag = false;
        break;
      } else {
        A[i] = A[i].substr(0, index) + A[i].substr(index + 1);
        console.log(A[i]);
      }
    }
    if (flag) {
      sol.push(ch);
    }
  }
  return sol;
};
