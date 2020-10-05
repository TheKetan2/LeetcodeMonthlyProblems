/*
https://leetcode.com/explore/challenge/card/october-leetcoding-challenge/559/week-1-october-1st-october-7th/3484/
GitHub: theketan2
*/

var bitwiseComplement = function (N) {
  return parseInt(
    N.toString(2)
      .split("")
      .map((n) => (n == "0" ? "1" : "0"))
      .join(""),
    2
  );
};
