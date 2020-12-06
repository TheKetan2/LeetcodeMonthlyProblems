/**
 * https://leetcode.com/problems/maximum-number-of-balloons/
 * github: theketan2
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function (text) {
  let obj = { b: 0, a: 0, l: 0, o: 0, n: 0 };
  for (let w of text.split("")) {
    if (obj[w] !== undefined) {
      obj[w] += 1;
    }
  }
  obj["o"] = Math.floor(obj["o"] / 2);
  obj["l"] = Math.floor(obj["l"] / 2);
  let sol = 9999999;
  for (let w of Object.keys(obj)) {
    if (obj[w] < sol) {
      sol = obj[w];
    }
  }
  console.log(obj);
  return sol == 9999999 ? 0 : sol;
};
