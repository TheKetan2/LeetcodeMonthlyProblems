/**
 * https://leetcode.com/problems/consecutive-characters
 * github: theketan2
 * @param {string} s
 * @return {number}
 */
var maxPower = function(s) {
    let max = 0, temp = 1;
    for(let i = 1; i<s.length; i++){
      if(s[i-1] == s[i]){
        temp++;
      }else{
        if(max<temp)
          max = temp;
        temp = 1;
      }
    }
  if(max<temp)
    max = temp
  console.log(max)
  return max;
};