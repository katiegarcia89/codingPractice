
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

import java.util.HashMap;

public class codingPractice {
    public static boolean validAnagram(String s, String t) {
        // If the lengths are different, they cannot be anagrams
        // Java uses length() with parentheses for strings
        if (s.length() != t.length()) {
            return false;
        }

        // Java HashMaps require Object classes: Character and Integer
        HashMap<Character, Integer> counts = new HashMap<>();

        // Loop 1: Count letters in string 's'
        for (int i = 0; i < s.length(); i++) {
            // Java uses .charAt(i) to look up a letter at an index
            char letter = s.charAt(i);

            // Java way to check if a key DOES NOT exist yet
            if (!counts.containsKey(letter)) {
                counts.put(letter, 1); // Set the count to 1
            } else {
                // To update a value, we use .put() and .get()
                counts.put(letter, counts.get(letter) + 1);
            }
        }

        // Loop 2: Subtract letters while checking string 't'
        for (int j = 0; j < t.length(); j++) {
            char letter = t.charAt(j);

            // Check if missing OR if the count is already 0
            if (!counts.containsKey(letter) || counts.get(letter) == 0) {
                return false;
            } else {
                counts.put(letter, counts.get(letter) - 1); // Reduce count by 1
            }
        }

        return true;
    }

    // Day 2 Palindrom Review:
    // The Problem
    // Given a string s, return true if it is a palindrome, and false otherwise.
    // Examples
    // Input: s = "racecar"
    // Output: true (Backward it is still "racecar")
    // Input: s = "hello"
    // Output: false (Backward it is "olleh", which doesn't match
    public static boolean palindromReview(String s) {
        for (int i = 0; i < s.length(); i++) {
            int j = s.length() - 1 - i;
            if (s.charAt(i) != s.charAt(j)) {
                return false;

            }

        }
        return true;
    }

    public static void main(String[] args) {
        System.out.println("Day one Java:");

        // System.out.println is Java's version of console.log
        System.out.println(validAnagram("anagram", "nagaram") ? "TRUE" : "FALSE"); // TRUE
        System.out.println(validAnagram("rat", "car") ? "TRUE" : "FALSE"); // FALSE

        // day 2
        System.out.println("Day two Palindrom Review:");
        System.out.println(palindromReview("racecar") ? "TRUE" : "FALSE"); // TRUE
        System.out.println(palindromReview("rat") ? "TRUE" : "FALSE"); // FALSE

    }
}
