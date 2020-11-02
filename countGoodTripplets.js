/**
 * https://leetcode.com/problems/count-good-triplets
 * github: theketan2
 */
var countGoodTriplets = function (arr, a, b, c) {
  let sol = 0;
  let goodGood = [];
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      for (let k = j + 1; k < len; k++) {
        // console.log(arr[i], arr[j], arr[k]);
        if (
          Math.abs(arr[i] - arr[j]) <= a &&
          Math.abs(arr[j] - arr[k]) <= b &&
          Math.abs(arr[i] - arr[k]) <= c
        ) {
          sol++;
          goodGood.push([arr[i], arr[j], arr[k]]);
        }
      }
    }
  }
  //   console.log(goodGood);
  return sol;
};

let arr = [3, 0, 1, 1, 9, 7],
  a = 7,
  b = 2,
  c = 3;
console.log(countGoodTriplets(arr, a, b, c));
