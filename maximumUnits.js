/**
 * github: theketan2
 * https://leetcode.com/problems/maximum-units-on-a-truck
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function (boxTypes, truckSize) {
  let boxes = [];
  boxTypes.forEach((box) => {
    for (let i = 0; i < box[0]; i++) {
      boxes.push(box[1]);
    }
  });
  boxes.sort((a, b) => b - a);
  return boxes.slice(0, truckSize).reduce((acc, curr) => acc + curr);
};
