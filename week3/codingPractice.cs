
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

    static void Main()
    {
        Console.WriteLine("Day one C#:");
        
        // Ternary operators look exactly like JavaScript and PHP
        Console.WriteLine(ValidAnagram("anagram", "nagaram") ? "TRUE" : "FALSE"); // TRUE
        Console.WriteLine(ValidAnagram("rat", "car") ? "TRUE" : "FALSE");         // FALSE
    }
}

