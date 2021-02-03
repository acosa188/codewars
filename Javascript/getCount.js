/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/

function getCount(str) {
    var vowelsCount = 0;
    
    // enter your majic here
    var vowels = ['a','e', 'i', 'o', 'u']
    
    str.split('').map(e=>{
      vowels.map(v=>{
        if (e === v)
          vowelsCount += 1
      })
    })
    
    return vowelsCount;
  }