/*
Build a function that can get all the integers between two given numbers.

Example:

(2,9)

Should give you this output back:

[ 3, 4, 5, 6, 7, 8 ]

If startNum is the same as endNum, return an empty array.
*/

public class Kata
{
  public static int[] Range(int startNum, int endNum)
  {
    if(endNum == startNum)
      return new int[0];
    int[] result = new int[endNum-startNum-1];
    for(int i = 0; i < endNum-startNum-1; i++){
      result[i] = i + startNum + 1;
    }
    return result;
  }
}