/**
 * It workd but TLE :( 47/59 passed
 * Github: theketan
 */
var findPairs = function(nums, k) {
    let obj = {}
    nums.sort((a,b) => a-b)
    for(let i = 0; i< nums.length-1; i++){
        for(let j = i+1; j< nums.length; j++){
            let key = Math.abs(nums[i] - nums[j])
            if(key > k) break;
            // obj[key] = []
            if(obj[key] == undefined){
                
                obj[key] = [nums[i] +" "+ nums[j]];
            }else{
                obj[key] =[ ...(new Set([...obj[key], nums[i] +" "+ nums[j]]))];
            }
        }
    }
    console.log(obj)
    return obj[k+""] === undefined?0: obj[k+""].length
    
};