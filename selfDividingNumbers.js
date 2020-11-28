/**
 * https://leetcode.com/problems/self-dividing-numbers/
 * github: theketan2
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
  let sol = [];
  for (let i = left; i <= right; i++) {
    let flag = true;
    for (let num of i.toString().split("")) {
      if (i % parseInt(num) !== 0) {
        flag = false;
        break;
      }
    }
    if (flag) sol.push(i);
  }
  return sol;
};

{
  pageOfItems: [
    {
      __v: 0,
      _id: "5f10121efb43a43e30a4fbd2",
      brand: [Object],
      category: [Object],
      color: [Array],
      createdAt: "2020-07-16T08:38:37.787Z",
      description: "Full Sleeves, Na, Na",
      discountType: "Percentage",
      discountValue: 50.07153075822603,
      fabric: null,
      gender: [Object],
      itemcode: "MW4405",
      name: "Moda Grey Casual Shirts",
      photo: [Array],
      price: 699,
      quantity: 10,
      rotation: 0,
      shipping: true,
      size: [Array],
      sleeves: "5f0ffa443c7e14330408c285",
      sold: 0,
      status: "ON",
      store: "5f10119dbfe6ec3e38b0a71b",
      subcategory: "5f04732469c00914e0bb905c",
      updatedAt: "2020-07-16T08:38:37.787Z",
    },
  ],
};
