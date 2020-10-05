/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let sol = []
    let obj = {}
    for(num of candidates){
        let temp = num;
        while(temp <= target){
            console.log(temp)
            obj[num] === undefined?obj[num] = [temp]: obj[num] = [...obj[num], temp]
            temp +=num;
        }
        
    }
    for(num of candidates){
    
        if(num === target){
                     console.log(num)
            sol = [...sol,[num]]
        
        }else{
        for(key of Object.keys(obj)){
            if(obj[key].includes(target - num)){
                console.log([num,...Array.from({length: (target - num)/parseInt(key)}, ()=> key) ])
                newArr = [num, ...Array.from({length: (target - num)/parseInt(key)}, ()=> parseInt(key))]
                sol = [...sol, newArr.sort((a,b)=> a-b)]
            } 
        }}
    }
    
    n = new Set(sol.map(num => num+""))

    // console.log([...n].map(word => word.trim().split(",").map(num => parseInt(num))))
    return [...n].map(word => word.trim().split(",").map(num => parseInt(num)))
    
};