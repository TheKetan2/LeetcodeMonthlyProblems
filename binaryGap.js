/**
 * https://leetcode.com/problems/binary-gap/
 * github: thekatan2
 * @param {number}
 * @return {number}
 */
var binaryGap = function (n) {
  let binary = n.toString(2);
  //console.log(binary)
  let diff = 0;
  for (let i = 0; i < binary.length - 1; i++) {
    if (binary[i] === "1") {
      let index = binary.substr(i + 1).indexOf(binary[i]) + 1;
      console.log(index);
      if (diff < index) {
        diff = index;
      }
    }
  }
  return diff;
};
