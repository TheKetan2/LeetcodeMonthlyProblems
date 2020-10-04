/*
https://leetcode.com/explore/challenge/card/october-leetcoding-challenge/559/week-1-october-1st-october-7th/3483/
Github: theketan2
*/

var removeCoveredIntervals = function (intervals) {
  let k = 0;
  intervals.sort((a, b) => a[0] - b[0] || b[1] - a[1]);
  for (let i = 0, j = 1; j < intervals.length; j++) {
    if (
      intervals[i][0] <= intervals[j][0] &&
      intervals[i][1] >= intervals[j][1]
    ) {
      k++;
    } else {
      i = j;
    }
  }
  return intervals.length - k;
};
