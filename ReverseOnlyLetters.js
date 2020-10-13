/**
 * url : https://leetcode.com/problems/reverse-only-letters
 * Github: theketan2
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function (S) {
  let arr = S.replace(/[^a-zA-Z]/g, "").split("");
  let sol = "";
  console.log(arr);
  for (let ch of [...S]) {
    if ((ch >= "a" && ch <= "z") || (ch >= "A" && ch <= "Z")) {
      sol += arr.pop();
    } else {
      sol += ch;
    }
  }
  return sol;
};
