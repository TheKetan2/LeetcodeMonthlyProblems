/**
 * https://leetcode.com/problems/slowest-key/
 * github: theketan2
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
var slowestKey = function (releaseTimes, keysPressed) {
  let obj = {};
  obj[keysPressed[0]] = releaseTimes[0];
  for (let i = 1; i < releaseTimes.length; i++) {
    let diff = releaseTimes[i] - releaseTimes[i - 1];
    if (obj[keysPressed[i]] === undefined || obj[keysPressed[i]] < diff) {
      obj[keysPressed[i]] = diff;
    }
  }
  obj = Object.entries(obj)
    .sort(([k1, ,], [k2, ,]) => k2.charCodeAt() - k1.charCodeAt())
    .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});
  console.log(obj);

  obj = Object.entries(obj)
    .sort(([, a], [, b]) => b - a)
    .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});

  console.log(Object.keys(obj)[0]);
  return Object.keys(obj)[0];
};

let releaseTimes = [9, 29, 49, 50],
  keysPressed = "cbcd";

slowestKey(releaseTimes, keysPressed);
