/**
 * https://leetcode.com/problems/unique-number-of-occurrences/
 * github: theketan2
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let obj = {}
    for(let num of arr){
        if(obj[num] === undefined){
            obj[num]= 1;
        }else{
            obj[num] +=1;
        }
    }
    let oArray = Object.values(obj);
    return oArray.length === (new Set(oArray)).size
    
};