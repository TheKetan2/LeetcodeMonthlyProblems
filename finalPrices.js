/**
 * github: theketan2
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function (prices) {
  let sol = [];
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[j] <= prices[i]) {
        sol.push(prices[i] - prices[j]);
        break;
      }
      if (j == prices.length - 1) sol.push(prices[i]);
    }
  }
  sol.push(prices[prices.length - 1]);
  return sol;
};
