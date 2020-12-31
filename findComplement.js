/**
 * github: theketan2
 * https://leetcode.com/problems/number-complement/
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {
  let binary = num.toString(2).split("");
  for (let i = 0; i < binary.length; i++) {
    if (binary[i] === "1") {
      binary[i] = "0";
    } else {
      binary[i] = "1";
    }
  }

  return parseInt(binary.join(""), 2);
};
