/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function (target, arr) {
  return (
    target.sort((a, b) => parseInt(a) - parseInt(b)).join(",") ==
    arr.sort((a, b) => parseInt(a) - parseInt(b)).join(",")
  );
};
