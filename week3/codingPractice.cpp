// TO RUN:g++ codingPractice.cpp -o codingPractice
//./codingPractice
//  #### Day 1: Valid Anagram

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
// let counts = {};//reminded myself about global variables

#include <iostream>
#include <string>
#include <unordered_map>
using namespace std;

bool validAnagram(string s, string t)
{
    if (s.length() != t.length())
    {
        return false;
    }
    unordered_map<char, int> counts;
    // Loop 1: Count letters in string 's'
    for (int i = 0; i < s.length(); i++)
    {
        char letter = s[i];
        // C++ way to check if a key DOES NOT exist yet in the map
        if (counts.find(letter) == counts.end())
        {
            counts[letter] = 1; // First time seeing it, set to 1
        }
        else
        {
            counts[letter] = counts[letter] + 1; // Seen it, add 1
        }
    }
    // Loop 2: Subtract letters while checking string 't'
    for (int j = 0; j < t.length(); j++)
    {
        char letter = t[j];

        // Check if missing OR if the count is already 0
        if (counts.find(letter) == counts.end() || counts[letter] == 0)
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

// Day 2 Palindrom Review:
//  The Problem
//  Given a string s, return true if it is a palindrome, and false otherwise.
//  Examples
//  Input: s = "racecar"
//  Output: true (Backward it is still "racecar")
//  Input: s = "hello"
//  Output: false (Backward it is "olleh", which doesn't match

bool palindromReview(string s)
{
    for (int i = 0; i < s.length(); i++)
    {
        int j = s.length() - 1 - i;
        if (s[i] != s[j])
        {
            return false;
        }
    }
    return true;
}

int main()
{
    cout << "Day 1: Valid Anagram Results: " << (validAnagram("anagram", "nagaram") ? " TRUE " : "FALSE") << endl; // TRUE
    cout << (validAnagram("rat", "car") ? "TRUE" : " FALSE ") << endl;                                             // FALSE

    // day 2
    cout << "Day 2: Palindrom Review Results: " << (palindromReview("racecar") ? " TRUE " : "FALSE") << endl; // TRUE
    cout << (palindromReview("hello") ? "TRUE" : " FALSE ") << endl;                                          // FALSE
}