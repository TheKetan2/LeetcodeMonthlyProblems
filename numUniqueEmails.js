/**
 * github: theketan2
 * https://leetcode.com/problems/unique-email-addresses/
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function (emails) {
  let set = new Set();
  for (let str of emails) {
    let localName = str.slice(0, str.indexOf("@"));
    localName = localName.replace(/["."]/gi, "");
    localName = localName.includes("+")
      ? localName.slice(0, localName.indexOf("+"))
      : localName;
    // console.log(localName+str.slice(str.indexOf("@")))
    set.add(localName + str.slice(str.indexOf("@")));
  }
  return set.size;
};
