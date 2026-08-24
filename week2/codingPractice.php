<?php
//TO RUN: php codingPractice.php
/*The Problem: Find the Missing Drone
A logistics company tracks its delivery drones using unique integer IDs. 
Drones are always sent out in pairs for safety. 
However, due to a technical glitch, one drone was deployed without its partner.
You are given an array of integers representing the IDs of all deployed drones. 
Every ID appears exactly twice, except for one unique ID which appears only once. 
Find and return the ID of the single, unpaired drone.Constraints
The array will always contain at least one element.You must solve this with a linear time complexity, O(n).
Can you solve it using only O(1) extra space?

Input: drones = [4, 1, 2, 1, 2]
Output: 4

Input: drones = [7, 3, 5, 3, 5, 7, 9]
Output: 9
*/

function missingDrone($drones): int
{
    $unpaired = 0;
    for ($n = 0; $n < count($drones); $n++) {
        $unpaired = $unpaired ^ $drones[$n];
    }
    return $unpaired;

}
echo "Day 1: ";
echo missingDrone([1, 2, 2, 1, 4]);
echo(" "); 
# /*The Problem: The Sentence CleanerYou are building a content moderation tool for a blog. 
# Your task is to count how many words in a user's comment are fully uppercase.
# You are given a string sentence containing words separated by single spaces. 
# A word is considered fully uppercase if all of its letters are capital letters 
# (e.g., "AI", "HELLO", "WOW"). 
# Words containing lowercase letters (like "Hello" or "ai") or numbers do not count.
# ConstraintsThe sentence will contain letters and spaces.
# You must solve this with a linear time complexity, O(n), where n is the length of the string.
# Example 1
# Input: sentence = "The NEW website looks AMAZING"
# Output: 2  (The uppercase words are "NEW" and "AMAZING")
# Example 2
# Input: sentence = "keep learning every single day"
# Output: 0  (There are no fully uppercase words)*/
echo "Day 2: ";

function upperCase($sentence): int
{
    $counter = 0;
    $words = explode(" ", $sentence); 
    foreach ($words as $currentWord){
        //ctype_upper checks if all characters in string are uppercase
        if (ctype_upper($currentWord)){
            $counter++; 
        }
    }
    return $counter; 

}
echo upperCase(("The NEW website looks AMAZING"));



// function upperCase($sentence): int {
//     $counter = 0;
//     $words = explode(" ", $sentence); 
    
//     // 1. Outer loop: Go through the list of words
//     for ($i = 0; $i < count($words); $i++) {
//         $currentWord = $words[$i];
        
//         // Assume the word is uppercase until proven otherwise
//         $isAllUpper = true;
        
//         // 2. Inner loop: Go through every character of the current word
//         for ($j = 0; $j < strlen($currentWord); $j++) {
//             // Check if this specific character is NOT uppercase
//             if (!ctype_upper($currentWord[$j])) {
//                 $isAllUpper = false;
//                 break; // Stop checking this word immediately
//             }
//         }
        
//         // If the inner loop finished and never found a lowercase letter, count it!
//         if ($isAllUpper) {
//             $counter++;
//         }
//     }
    
//     return $counter; 
// }

// echo "Day 2: "; 
// echo upperCase("The NEW website looks AMAZING"); // Output: 2



?>