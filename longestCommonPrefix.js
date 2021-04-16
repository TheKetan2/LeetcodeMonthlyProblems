/**
 * github: theketan2
 * https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/887/
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let len = strs.length;
  if (len == 1) {
    return strs[0];
  } else if (len == 0) {
    return "";
  }
  strs.sort((a, b) => a.length - b.length);
  len = strs[0].length;

  for (let i = len; i > 0; i--) {
    let str = strs[0]?.slice(0, i);
    // console.log(str," + ",strs[0]?.slice(0,i))
    let newStrs = strs.filter((s) => s.slice(0, i) === str);
    if (newStrs.length === strs.length) {
      return str;
    }
  }
  return "";
};
