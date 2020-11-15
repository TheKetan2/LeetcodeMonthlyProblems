/**
 * https://leetcode.com/problems/construct-the-rectangle/
 * github: theketan2
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function (area) {
  let diff = 9999999999;
  let solArr = [];
  for (let i = 1; i <= Math.ceil(area / 2); i++) {
    let remainder = area % i;
    if (remainder === 0) {
      let div = area / i;
      let tempDiff = Math.abs(i - div);
      if (tempDiff < diff) {
        let min = i < div ? i : div;
        let max = i > div ? i : div;
        solArr = [max, min];
        diff = tempDiff;
      }
    }
  }
  return solArr;
};
