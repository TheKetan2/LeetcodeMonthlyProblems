/**
 * https://leetcode.com/problems/valid-mountain-array/
 * github: theketan2
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function (arr) {
  if (arr.length < 3) {
    return false;
  }
  let peak = Math.max(...arr);
  let index = arr.indexOf(peak);
  if (peak == arr[arr.length - 1] || peak === arr[0]) {
    return false;
  }
  let arr1 = [...arr.slice(0, index + 1)];
  let arr2 = [...arr.slice(index)];
  for (let i = 1; i < arr1.length; i++) {
    if (arr1[i - 1] >= arr1[i]) {
      return false;
    }
  }

  for (let i = 1; i < arr2.length; i++) {
    if (arr2[i - 1] <= arr2[i]) {
      return false;
    }
  }

  return true;
};
