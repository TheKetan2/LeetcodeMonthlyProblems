/**
 * github: theketan2
 * https://leetcode.com/problems/first-unique-character-in-a-string
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  let obj = {};
  for (let char of [...s]) {
    if (obj[char] === undefined) {
      obj[char] = 1;
    } else {
      obj[char] += 1;
    }
  }
  let arr = Object.keys(obj);
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]] === 1) {
      return s.indexOf(arr[i]);
    }
  }
  return -1;
};
