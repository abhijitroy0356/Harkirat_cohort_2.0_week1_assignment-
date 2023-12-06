/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/
const arr=['a','e','i','o','u']
function countVowels(str) {
    // Your code here
    const ref=str.toLowerCase()
    let cnt=0;
   for(let l of ref){
    if(arr.includes(l)){
      cnt++;
    }
   }
   return cnt;
}

module.exports = countVowels;