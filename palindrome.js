/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  if(str===''){
    return true;
  }
  if(str.length===1){
    return true;
  }
  let king= str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  let l=0;
  let r=king.length-1
  
  while(l<r){
    if(king[l]!==king[r]){
     return false;
    }
    l++;
    r--;
  }
  return true;
}

module.exports = isPalindrome;
