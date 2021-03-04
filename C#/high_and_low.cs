/*
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Example:

Kata.HighAndLow("1 2 3 4 5");  // return "5 1"
Kata.HighAndLow("1 2 -3 4 5"); // return "5 -3"
Kata.HighAndLow("1 9 3 4 -5"); // return "9 -5"
Notes:

All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.
*/

using System;
using System.Linq;

public static class Kata
{
  public static string HighAndLow(string numbers)
  {
    int[] sortedNums = numbers.Split(' ').Select(x => Int32.Parse(x)).ToArray();
    Array.Sort(sortedNums);
    return sortedNums[sortedNums.Length-1].ToString() + " " + sortedNums[0].ToString();
  }
}