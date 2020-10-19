/**
 * url: https://leetcode.com/problems/height-checker/
 * github: theketan2
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
  let temp = [].concat(heights);
  heights.sort((a, b) => parseInt(a) - parseInt(b));
  console.log(heights);
  let sol = 0;
  for (let i in temp) {
    console.log(heights[i], " == ", temp[i]);
    if (temp[i] !== heights[i]) sol++;
  }
  return sol;
};
