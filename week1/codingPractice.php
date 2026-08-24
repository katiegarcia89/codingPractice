<?php
//TO RUN: php codingPractice.php

//Day 1: Is the number even?
//Interview question:
//Write a function that accepts an integer and returns true if the number is even and false if it is odd.

function isEven(int $n): bool
{
    return $n % 2 === 0;
}
echo "Day one ";
echo isEven(8) ? "TRUE " : "FALSE ";//TRUE



//Day 2: Write a function that takes a string and returns true if it is a 
//palindrome and false otherwise. A palindrome reads the same forward and backward, such as "racecar"

function isItPalindrome(string $word): bool
{

    $newWord = "";
    $oldWord = "";
    for ($i = 0; $i < strlen($word); $i++) {
        $newWord .= $word[$i]; // to concate use "." and not +=
    }
    for ($i = strlen($word) - 1; $i >= 0; $i--) {
        $oldWord .= $word[$i];
    }
    return $newWord === $oldWord;
}
echo "Day two";
echo isItPalindrome("racecar") ? " TRUE" : " FALSE"; // Outputs: TRUE
echo isItPalindrome("hello") ? " TRUE" : " FALSE ";   // Outputs: FALSE


/*Day 3 
Write a function that takes a string and returns the first character that appears only once.

Examples:

Input:  "swiss"
Output: "w"

Input:  "aabbcddee"
Output: "c"*/
function firstCharacter(string $word): string
{
    $charCount = [];
    for ($i = 0; $i < strlen($word); $i++) {
        $char = $word[$i];
        $charCount[$char] = ($charCount[$char] ?? 0) + 1;
    }
    for ($i = 0; $i < strlen($word); $i++) {
        $char = $word[$i];
        if ($charCount[$char] == 1) {
            return $char;
        }
    }
    return "there is not a single character";

}
echo "Day three ";
echo firstCharacter("swiss");
/* Day 4
 * Write a function that takes a string and returns how many vowels it contains.
 *
 * Example:
 *
 * Input: "hello"
 * Output: 2
 * Input: "computer"
 * Output: 3
 */

function howManyVowels(string $word): int
{
    $vowelCount = 0;

    for ($i = 0; $i < strlen($word); $i++) {
        $c = strtolower($word[$i]);
        if ($c == "a" || $c == "e" || $c == "i" || $c == "o" || $c == "u" || $c == "y") {
            $vowelCount++;
        }

    }
    return $vowelCount;
}
echo " Day Four";
echo " " . howManyVowels("heLLO"); //2
/*
 * Day 5: Write a function that takes an array (or list) of unique numbers from
 * 0 to n.
 * One number from that exact sequence is completely missing.
 * Your function needs to find and return that missing number.
 * Examples:Input: [3, 0, 1] (The sequence should be 0 to 3, but 2 is missing)
 * Output: 2Input: [0, 1, 3, 4] (The sequence should be 0 to 4, but 2 is
 * missing)Output: 2T
 */


function missingNumber($numArray)
{

    for ($i = 0; $i <= count($numArray); $i++) {//shows how many items are in the array


        if (!in_array($i, $numArray)) {
            return $i; // Found it! Return it immediately.
        }
    }
}
echo " Day Five ";
echo missingNumber([3, 0, 1]); //2

echo " Day 6 Challenge: Two Sum -- Target Match";
echo "
Write a function that takes an array of numbers and a single target number. 
The function needs to find two different numbers inside that array that add up exactly to the target number. 
Return those two numbers as a new array. ";
// Rule: 
// You cannot use the exact same array element twice to make the sum.
// Assumption: There will always be exactly one valid solution. 

function twoSum($numArray, $target)
{
    for ($i = 0; $i < count($numArray); $i++) {
        for ($j = $i + 1; $j < count($numArray); $j++) {
            if ($numArray[$i] + $numArray[$j] == $target) {
                return [$numArray[$i], $numArray[$j]];
            }
        }
    }
}
// 1. Run your logic and save the array answer [2, 7]
$result = twoSum([2, 7, 11, 15], 9);

// 2. Glue the numbers together with a space and echo them cleanly
echo implode(" ", $result);

?>