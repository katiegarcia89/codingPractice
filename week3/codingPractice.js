//TO RUN: node codingPractice.js
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
function validAnagram(s, t) {
    //no short hand

    if (s.length !== t.length) {
        return false;
    }
    let counts = {};
    //this allows for loops to communciate with both each other becvause it is global
    // Loop through the first string to count letters
    for (let i = 0; i < s.length; i++) {
        let letter = s[i];
        // Check if we have seen this letter before
        if (counts[letter] === undefined) {
            // First time seeing it, set count to 1
            counts[letter] = 1;
        }
        else {
            // Seen it before, add 1
            counts[letter] = counts[letter] + 1;
        }

    }
    // Loop through the second string to subtract letters
    for (let j = 0; j < t.length; j++) {
        let letter = t[j];
        if (counts[letter] === undefined || counts[letter] === 0) {
            return false;
        } else {
            counts[letter] = counts[letter] - 1; // Reduce the count by 1
        }
    }
    return true;
}


console.log("Day 1: Valid Anagram Result (no short hand): ");
console.log(validAnagram("anagram", "nagaram")); //true
console.log(validAnagram("rat", "car")); // false



function validAnagram2(s, t) {
    if (s.length !== t.length) return false;
    let counts = {};
    for (let letters of s) {
        //assign the letters in s to the array counts 
        counts[letters] = (counts[letters] || 0) + 1;
    }
    for (let letters of t) {
        // If the letter isn't there, or count drops below 0
        if (!counts[letters]) {
            return false;
        }
        counts[letters]--;
    }
    return true;
}

console.log("Day 1: Valid Anagram Result (some short hand): ");
console.log(validAnagram2("anagram", "nagaram")); //true)
console.log(validAnagram2("rat", "car")); // false)


function validAnagram3(s, t) {
    if (s.length !== t.length) { return false; }
    // Split into characters, sort alphabetically, and glue back together
    //no space between split or join
    let sortedS = s.split('').sort().join('');
    let sortedT = t.split('').sort().join('');
    // Check if the final strings are identical (returns true or false)
    return sortedS === sortedT;
}

console.log("Day 1: Valid Anagram Result (using sorting): ");
console.log(validAnagram3("anagram", "nagaram")); //true)
console.log(validAnagram3("rat", "car")); // false)

//Day 1 review 
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
console.log(" Reviewing day 1 ");
function maybeAnagram(s, t) {
    if (s.length != t.length) { return false; }
    let counts = {};
    for (let i = 0; i < s.length; i++) {
        let letters = s[i];
        if ((counts[letters]) === undefined) {
            counts[letters] = 1;
        }
        else { (counts[letters]) += 1; }
    }
    for (let j = 0; j < t.length; t++) {
        let letters = t[j];
        if ((counts[letters]) === undefined || (counts[letters]) === 0) {
            return false;

        }
        counts[letters]--;
    }
    return true;

}
console.log(maybeAnagram("cats", "tacs")); //true
console.log(maybeAnagram("tacos", "five")); //false

function shortAnagram(s, t) {
    let sortedS = s.split('').sort().join('');
    let sortedT = t.split('').sort().join('');
    return sortedS === sortedT;
}
console.log(shortAnagram("cats", "tacs")); //true
console.log(shortAnagram("tacos", "five")); //false

//Day 2 Palindrom Review: 
// The Problem
// Given a string s, return true if it is a palindrome, and false otherwise.
// Examples
// Input: s = "racecar"
// Output: true (Backward it is still "racecar")
// Input: s = "hello"
// Output: false (Backward it is "olleh", which doesn't match)
function palindromReview(s) {
    //for (let i = 0; i < s.length; i++) {
    //dividing by 2 creates less work ( doesn't compare the same indexes twice)
    //using Math.floor is more precise
    for (let i = 0; i < Math.floor(s.length / 2); i++) {
        let j = s.length - 1 - i;
        if (s[i] !== s[j]) {
            return false;
        }
    }
    return true;
}


console.log(" Day 2 Palindrom Review Results: ");
console.log(palindromReview("racecar"));
console.log(palindromReview("hello"));
console.log(palindromReview("apghty"));

//day 3 reviewing palindrom

function reviewReviewPalinfrom(s) {
    for (let i = 0; i < s.length; i++) {
        let j = s.length - 1 - i;
        if (s[i] === s[j]) {
            return true;
        }
    }
    return false;
}

console.log("Day 3 review, review Palindrom Results: ");
console.log(palindromReview("racecar"));
console.log(palindromReview("hello"));
console.log(palindromReview("apghty"));

//day 3: Find the Highest and Lowest Number

//  Given an array (or list) of numbers, write a function that returns both the highest and the lowest numbers found in that array.

//  ExamplesInput: nums = [3, 5, 1, 9, 2]
//  Output: Highest: 9, Lowest: 1
//  Input: nums = [-4, 0, 15, -12]
//  Output: Highest: 15, Lowest: -12

function minMax(nums) {
    let minNum = nums[0];
    let maxNum = nums[0];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > maxNum) {
            maxNum = nums[i];
        }
        else if (nums[i] < minNum) {
            minNum = nums[i];
        }
    }
    //issue I had was not having the return within brackets, and therefore... continuously getting the max number as the result.
    return [minNum, maxNum];
}

console.log("Day 3: Highest and Lowest Number Results");
console.log(minMax([3, 5, 1, 9, 2])); //9, 1
console.log(minMax([-4, 0, 15, -12])); //-12, 15
