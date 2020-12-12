/**
 * https://leetcode.com/problems/defanging-an-ip-address/
 * github: theketan2
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    return address.replace(/[.]/g, "[.]")
};