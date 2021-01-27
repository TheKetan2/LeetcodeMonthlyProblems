/**
 * @param {number} n
 * @return {number}
 */
var concatenatedBinary = function (n) {
  let num = 0;

  for (let i = 1; i <= n; i++) {
    num *= 2 ** i.toString(2).length;
    //console.log(num)
    num += i;
    num %= 10 ** 9 + 7;
  }
  return num;
};

/**
 * @param {number} n
 * @return {number}
 */
var concatenatedBinary = function (n) {
  let binary = "0b";
  for (let i = 1; i <= n; i++) {
    binary += i.toString(2);
  }
  return BigInt(binary) % BigInt("0b" + (10 ** 9 + 7).toString(2));
};
