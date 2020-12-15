/**
 * https://leetcode.com/problems/count-the-number-of-consistent-strings/
 * github: theketan2
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    let sol=0;
    for(let word of words){
        let flag = true;
        for(let ch of [...word]){
            if(!allowed.includes(ch)){
                flag = false;
                break;
            }
        }
        if(flag) sol++;
    }
    return sol;
};