/**
 * github: theketan2
 * https://leetcode.com/explore/learn/card/fun-with-arrays/527/searching-for-items-in-an-array/3250/
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    let temp = [...arr];
    temp.splice(i, 1);
    // console.log(temp);
    if (temp.includes(arr[i] + arr[i])) {
      console.log(arr[i]);
      return true;
    }
  }
  return false;
};
