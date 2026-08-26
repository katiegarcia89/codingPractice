
/*TO RUN:
dotnet run --file codingPractice.cs
*/
// #### Day 1: Valid Anagram

// Given two strings, `s` and `t`, return `true` if `t` is an anagram of `s`.
// Otherwise, return `false`.

// An anagram is formed by rearranging the letters of another word while using
// each original letter exactly once.

// **Examples**

// - Input: `s = "anagram"`, `t = "nagaram"`
// - Output: `true`

// - Input: `s = "rat"`, `t = "car"`
// - Output: `false`

// **Possible Approaches**

// - **Sorting:** Sort both strings and determine whether the sorted results are
//   identical. This approach has a time complexity of `O(n log n)`.

// - **Frequency counter:** Count how often each character occurs in `s` and
//   subtract the corresponding counts while processing `t`. The strings are
//   anagrams if they have equal lengths and every final count is zero. This
//   approach has a time complexity of `O(n)`.
using System;
using System.Collections.Generic;

class Program
{
    public static bool ValidAnagram(string s, string t)
    {
        // If the lengths are different, they cannot be anagrams
        if (s.Length != t.Length)
        {
            return false;
        }

        // C# requires you to define the Key type (char) and Value type (int)
        Dictionary<char, int> counts = new Dictionary<char, int>();

        // Loop 1: Count letters in string 's'
        for (int i = 0; i < s.Length; i++)
        {
            char letter = s[i];

            // C# way to check if a key DOES NOT exist yet
            if (!counts.ContainsKey(letter))
            {
                counts[letter] = 1; // First time seeing it, set to 1
            }
            else
            {
                counts[letter] = counts[letter] + 1; // Seen it, add 1
            }
        }

        // Loop 2: Subtract letters while checking string 't'
        for (int j = 0; j < t.Length; j++)
        {
            char letter = t[j];

            // Check if missing OR if the count is already 0
            if (!counts.ContainsKey(letter) || counts[letter] == 0)
            {
                return false;
            }
            else
            {
                counts[letter] = counts[letter] - 1; // Reduce count by 1
            }
        }

        return true;
    }
    //Day 2 Palindrom Review: 
    // The Problem
    // Given a string s, return true if it is a palindrome, and false otherwise.
    // Examples
    // Input: s = "racecar"
    // Output: true (Backward it is still "racecar")
    // Input: s = "hello"
    // Output: false (Backward it is "olleh", which doesn't match
    public static bool palinromReview(string s)
    {
        for (int i = 0; i < s.Length; i++)
        {
            int j = s.Length - 1 - i;
            if (s[i] != s[j])
            {
                return false;
            }
        }
        return true;
    }

    // day 3: Find the Highest and Lowest Number

    // Given an array (or list) of numbers, write a function that returns both the
    // highest and the lowest numbers found in that array.

    // ExamplesInput: nums = [3, 5, 1, 9, 2]
    // Output: Highest: 9, Lowest: 1
    // Input: nums = [-4, 0, 15, -12]
    // Output: Highest: 15, Lowest: -12

    public static int[] minMax(int[] nums)
    {
        int minNum = nums[0];
        int maxNum = nums[0];
        for (int i = 0; i < nums.Length; i++)
        {
            if (nums[i] > maxNum)
            {
                maxNum = nums[i];
            }
            if (nums[i] < minNum)
            {
                minNum = nums[i];
            }
        }
        return new int[] { maxNum, minNum };
    }
    static void Main()
    {
        Console.WriteLine("Day one C#:");

        // Ternary operators look exactly like JavaScript and PHP
        Console.WriteLine(ValidAnagram("anagram", "nagaram") ? "TRUE" : "FALSE"); // TRUE
        Console.WriteLine(ValidAnagram("rat", "car") ? "TRUE" : "FALSE");         // FALSE
                                                                                  //day 2
        Console.WriteLine("Day 2 : Palindrom Review: Results");
        Console.WriteLine(palinromReview("racecar") ? "TRUE" : "FALSE"); // TRUE
        Console.WriteLine(palinromReview("hello") ? "TRUE" : "FALSE");         // FALSE

        Console.WriteLine("Day 3: Highest and Lowest Number: Results"); 
        int[] result1 = minMax(new int[] { 2, 7, 11, 15 }); 
        Console.WriteLine("Min: " + result1[0] + " Max: " + result1[1]);
        int[] result2 = minMax(new int[] {4, 0, 15, -12}); 
        Console.WriteLine("Min: " + result2[0] + " Max: " + result2[1]);

    }
}

