/**
 * This time no story, no theory. The examples below show you how to write function accum:

Examples:

accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.
 * @param {*} s 
 */

function accum(s) {
	// your code
  return s.split('').map((x, i) => {return x.toUpperCase() + x.repeat(i+1).toLowerCase().slice(1)}).join('-')
}