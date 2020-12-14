/**
 * https://leetcode.com/problems/goal-parser-interpretation/submissions/
 * github: theketan2
 * @param {string} command
 * @return {string}
 */
var interpret = function (command) {
  while (command.includes("()")) {
    command = command.replace("()", "o");
  }
  while (command.includes("(al)")) {
    command = command.replace("(al)", "al");
  }
  return command;
};
