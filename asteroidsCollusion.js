/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
  let stack = [];
  let i = 0;
  while (i < asteroids.length) {
    if (!stack.length || stack[stack.length - 1] < 0 || asteroids[i] > 0) {
      stack.push(asteroids[i]);
      i++;
    } else if (stack[stack.length - 1] < Math.abs(asteroids[i])) {
      stack.pop();
    } else if (stack[stack.length - 1] === Math.abs(asteroids[i])) {
      stack.pop();
      i++;
    } else {
      i++;
    }
  }

  return stack;
};
