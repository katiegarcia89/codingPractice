/*TO RUN:
dotnet run --file codingPractice.cs
*/

using System;
using System.Collections.Generic; //day 3
using System.Linq; // Required to use the .Contains() method // day 5

/*Day 1: Is the number even?
Interview question:
Write a function that accepts an integer and returns true if the number is even and false if it is odd.*/
class Program
{
    static bool IsEven(int n)
    {

        return n % 2 == 0;
    }
    /* static void Main()
     {
         Console.WriteLine(IsEven(8)); //true 
     }*/

    // Day 2: Write a function that takes a string and returns true if it is a
    // palindrome and false otherwise. A palindrome reads the same forward and backward, such as "racecar"

    static bool isItPalindrome(string word)
    {
        string newWord = "";
        string otherWord = "";

        for (int i = 0; i < word.Length; i++)
        {
            newWord += word[i];
        }

        for (int i = word.Length - 1; i >= 0; i--)
        {
            otherWord += word[i];
        }
        return newWord == otherWord;

    }
    /*Day 3 
    ******Write a function that takes a string and returns the first character that appears only once.
    ******Examples:
    Input:  "swiss"
    Output: "w"
    Input:  "aabbcddee"
    Output: "c"*/
    static string firstCharacter(string word)
    //using System.Collections.Generic; 
    {
        // Keys are characters (char), Values are counts (int)
        Dictionary<char, int> charCount = new Dictionary<char, int>();
        // Loop 1: Count how many times each character appears
        for (int i = 0; i < word.Length; i++)
        {
            char c = word[i];

            // C# safety check: initialize the key to 0 if it doesn't exist yet
            if (!charCount.ContainsKey(c))
            {
                charCount[c] = 0;
            }
            charCount[c]++;
        }

        // Loop 2: Find the first character with a count of 1
        for (int i = 0; i < word.Length; i++)
        {
            char c = word[i];
            if (charCount[c] == 1)
            {
                return c.ToString(); // Convert the single char back to a string
            }

        }
        return "there is not a single character";

    }
    /*
   * Day 4
   * Write a function that takes a string and returns how many vowels it contains.
   * 
   * Example:
   * 
   * Input: "hello"
   * Output: 2
   * Input: "computer"
   * Output: 3
   */
    static int howManyVowels(string word)
    {
        int countingVowels = 0;
        for (int i = 0; i < word.Length; i++)
        {
            char c = Char.ToLower(word[i]);
            if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u' || c == 'y')
            {
                countingVowels++;
            }
        }
        return countingVowels;

    }
    /*
   * Day 5: Write a function that takes an array (or list) of unique numbers from
   * 0 to n.
   * One number from that exact sequence is completely missing.
   * Your function needs to find and return that missing number.
   * Examples:Input: [3, 0, 1] (The sequence should be 0 to 3, but 2 is missing)
   * Output: 2Input: [0, 1, 3, 4] (The sequence should be 0 to 4, but 2 is
   * missing)Output: 2T
   */

    static int MissingNumber(int[] numArray)
    {//using System.Linq
        // 2. Loop from 0 up to and including n
        for (int i = 0; i <= numArray.Length; i++)
        {
            // .Contains(i) checks if 'i' is in the array.
            // The '!' flips it to mean "is NOT in the array".
            if (!numArray.Contains(i))
            {
                return i; // Found it! Return it immediately.
            }
        }

        return -1; // Default fallback required by C#
    }
    // Day 6 Challenge: Two Sum -- Target Match

    // Write a function that takes an array of numbers and a single target number.
    // The function needs to find two different numbers inside that array that add up exactly to the target number.
    // Return those two numbers as a new array.
    // Rule:
    // You cannot use the exact same array element twice to make the sum.
    // Assumption: There will always be exactly one valid solution.

    static int[] twoSum(int[] numArray, int target)
    {
        for (int i = 0; i < numArray.Length; i++)
        {
            for (int j = i + 1; j < numArray.Length; j++)
            {
                if (numArray[i] + numArray[j] == target)
                {
                    return new int[] { numArray[i], numArray[j] };

                }
            }
        }
        return new int[] { };
    }

    static void Main()

    {
        //day 1 
        Console.WriteLine(IsEven(8)); //true 
                                      //day 2
        Console.WriteLine(isItPalindrome("hello")); //false
        Console.WriteLine(isItPalindrome("racecar"));//yes

        //day 3
        Console.WriteLine(firstCharacter("swiss"));  //w 

        //day 4 
        Console.WriteLine(howManyVowels("hElLO")); //2

        //day 5
        Console.WriteLine("Day Five " + MissingNumber(new int[] { 3, 0, 1 })); //2

        //day 6
        int[] result = twoSum(new int[] { 2, 7, 11, 15 }, 9); 
        
        // Use string.Join to display the numbers cleanly
        Console.WriteLine("Day 6 Result: " + string.Join(" ", result));

    }


}