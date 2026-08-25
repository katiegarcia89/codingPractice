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
    if(s.length != t.length){return false;}
    let counts = {};
    for (let i = 0; i < s.length; i++) {
        let letters = s[i];
        if ((counts[letters]) ===undefined){
            counts[letters] = 1; 
        }
        else {(counts[letters])+=1; }
    }
    for(let j = 0 ; j <t.length; t ++){
        let letters = t[j]; 
        if ((counts[letters])===undefined || (counts[letters])===0){
            return false; 

        }
        counts[letters]--; 
    }
    return true; 

}
console.log(maybeAnagram("cats", "tacs")); //true
console.log(maybeAnagram("tacos", "five")); //false

function shortAnagram(s,t){
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
    