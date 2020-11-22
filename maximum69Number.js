var maximum69Number = function (num) {
  let sol = [];
  str = [...num.toString()];
  for (let i = 0; i < str.length; i++) {
    let temp = [...str];
    if (temp[i] === 9) temp[i] = 6;
    else temp[i] = 9;
    sol.push(parseInt(temp.join("")));
  }
  return Math.max(...sol);
};

/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number = function (num) {
  let sol = 0;
  str = [...num.toString()];
  for (let i = 0; i < str.length; i++) {
    let temp = [...str];
    if (temp[i] === 9) temp[i] = 6;
    else temp[i] = 9;
    if (sol < parseInt(temp.join(""))) sol = parseInt(temp.join(""));
  }
  return sol;
};
