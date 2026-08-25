<?php
//TO RUN: php codingPractice.php
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
//let counts = {};//reminded myself about global variables

function validAnagram(string $s, string $t): bool
{
    if (strlen($s) != strlen($t))
        return false;
    $counts = [];
    for ($i = 0; $i < strlen($s); $i++) {
        $letter = $s[$i];
        // PHP way to check if a key does NOT exist
        if (!isset($counts[$letter])) {
            $counts[$letter] = 1;
        } else {
            $counts[$letter] = $counts[$letter] + 1;
        }
    }
    for ($j = 0; $j < strlen($t); $j++) {
        $letter = $t[$j];
        if (!isset($counts[$letter]) || $counts[$letter] === 0) {
            return false;
        } else {
            $counts[$letter] = $counts[$letter] - 1; // Reduce the count by 1
        }
    }
    return true;

}

echo "Day one: Valid Anagram Results: ";
echo validAnagram("anagram", "nagaram") ? "TRUE " : "FALSE ";//TRUE
echo validAnagram("rat", "car") ? "TRUE " : "FALSE "; //false

//Day 2 Palindrom Review: 
// The Problem
// Given a string s, return true if it is a palindrome, and false otherwise.
// Examples
// Input: s = "racecar"
// Output: true (Backward it is still "racecar")
// Input: s = "hello"
// Output: false (Backward it is "olleh", which doesn't match)
function palindromReview($word)
{
    for ($i = 0; $i < strlen($word); $i++) {
        $j = strlen($word) - 1 - $i;
        if ($word[$i] !== $word[$j]) {
            return false;
        }
    }
    return true;
    

}
echo "Day two: Palindrom Review: ";
echo palindromReview("racecar") ? " TRUE" : " FALSE"; // Outputs: TRUE
echo palindromReview("hello") ? " TRUE" : " FALSE ";   // Outputs: FALSE
echo palindromReview("apghty") ? " TRUE" : " FALSE "; //false
?>