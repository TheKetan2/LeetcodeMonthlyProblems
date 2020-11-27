/**
 * https://leetcode.com/problems/self-dividing-numbers/
 * github: theketan2
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    
    let sol = []
    for(let i = left; i<= right; i++){
        let flag = true;
        for(let num of (i).toString().split("")){
            if(i%parseInt(num) !== 0){
                flag = false;
                break;
            }
    
        }
        if(flag)
            sol.push(i);
    }
    return sol;
};