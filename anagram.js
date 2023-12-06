/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  
  if (str1.length !== str2.length) {
    return false;
  }

  
  const charMap = {};
  for (const char of str1) {
    const lowerChar = char.toLowerCase();
    if (charMap[lowerChar] === undefined) {
      charMap[lowerChar] = 0;
    }
    charMap[lowerChar]++;
  }

  
  for (const char of str2) {
    const lowerChar = char.toLowerCase();
    if (charMap[lowerChar] === undefined || charMap[lowerChar] === 0) {
      return false;
    }
    charMap[lowerChar]--;
  }

 
  return true;
}

module.exports = isAnagram;
