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

//day 4 

/*Given a string, we'll say that the front is the first 3 chars of the string. 
If the string length is less than 3, the front is whatever is there. 
Return a new string which is 3 copies of the front.*/
/*Examples

front3('Java') → JavJavJav
front3('Chocolate') → ChoChoCho
front3('abc') → abcabcabc*/

function front3(str) {
    if (str.length <= 3) {
        return str + str + str;
    }
    else if (str.length > 3) {
        let newStr = str[0] + str[1] + str[2];
        return newStr + newStr + newStr;
    }
}

console.log("Day 5: front3: Results");
console.log(front3('Java'));
console.log(front3('Chocolate'));
console.log(front3('abc'));
console.log(front3('ab'));

/*Given a string, take the last char and return 
a new string with the last char added at the front and back, so 'cat' yields 'tcatt' 
The original string will be length 1 or more.*/
/*Examples

backAround('cat') → tcatt
backAround('Hello') → oHelloo
backAround('a') → aaa*/
function backAround(str) {
    return str[str.length - 1] + str + str[str.length - 1];

}
console.log("Day 5: backAround: Results");
console.log(backAround('cat'));
console.log(backAround('Hello'));
console.log(backAround('a'));

function backAroundshort(str) {
    return str.at(-1) + str + str.at(-1);
}
console.log("Day 5: backAroundshort: Results");
console.log(backAroundshort('cat'));
console.log(backAroundshort('Hello'));
console.log(backAroundshort('a'));
/*Return true if the given non-negative number is a multiple of 3 or a multiple of 5. (Hint: Use the % 'mod' operator)

Examples

or35(3) → true
or35(10) → true
or35(8) → false*/

function or35(n) {
    if (n % 3 == 0 || n % 5 == 0) {
        return true;
    }
    return false;
}
console.log(or35(3));// → true
console.log(or35(10));// → true
console.log(or35(8));// → false*/)

/*Given a string, take the first 2 chars and return the string with the 2 chars added at both the front and back, so 'kitten' yields 'kikittenki' chars are there.

Examples

front22('kitten') → kikittenki
front22('Ha') → HaHaHa
front22('abc') → ababcab*/

function front22(str) {
    if (str.length > 1) {
        let first = str.at(0);
        let sec = str.at(1);
        return first + sec + str + first + sec;
    }
    else return str + str + str;


}

function front22(str1) {
    if (str.length > 1) {
        let firstTwo = str[0] + str[1];

        return firstTwo + str + firstTwo;
    }
    else return str + str + str;


}
console.log(front22('kitten')); //→ kikittenki
console.log(front22('Ha'));// → HaHaHa
console.log(front22('abc')); //→ ababcab*/)

/*Warmup-1 -- startHi
Given a string, return true if the string starts with 'hi'and false otherwise.

Examples

startHi('hi there') → true
startHi('hi') → true
startHi('hello hi') → false*/


function startHi(str) {
    firstTwo = str[0] + str[1];
    if (firstTwo === "hi") {
        return true;
    }

    return false;
}

console.log(startHi('hi there'));// → true
console.log(startHi('hi')); //→ true
console.log(startHi('hello hi')); //→ false*/
/*Warmup-1 -- icyHot
Given two temperatures, return true if one is less than 0 and the other is greater than 100.

Examples

icyHot(120, -1) → true
icyHot(-1, 120) → true
icyHot(2, 120) → false*/

function icyHot(temp1, temp2) {
    if (temp1 < 0 || temp2 < 0) {
        if (temp1 > 100 || temp2 > 100) {
            return true;
        }
    }
    return false;
}

function icyHot1(temp1, temp2) {
    if ((temp1 < 0 || temp2 < 0) & (temp1 > 100 || temp2 > 100)) {
        return true;
    }

    return false;
}
console.log(icyHot(120, -1)); //→ true
console.log((-1, 120)); //→ true
console.log(icyHot(2, 120)); //→ false*/)

/*Warmup-1 -- in1020
Given 2 int values, return true if either of them is in the range 10..20 inclusive.

Examples

in1020(12, 99) → true
in1020(21, 12) → true
in1020(8, 99) → false*/
function in1020(a, b) {
    return ((a >= 10 && a <= 20) || (b >= 10 && b <= 20));
}
console.log(in1020(12, 99));// → true
console.log(in1020(21, 12)); //→ true
console.log(in1020(8, 99));// → false*/)
/*Warmup-1 -- hasTeen
We'll say that a number is 'teen' if it is in the range 13..19 inclusive. Given 3 int values, return true if 1 or more of them are teen.

Examples

hasTeen(13, 20, 10) → true
hasTeen(20, 19, 10) → true
hasTeen(20, 10, 13) → true*/

function hasTeen(a, b, c) {
    return ((a >= 13 && a <= 19) || (b >= 13 && b <= 19) || (c >= 13 && c <= 19))

}
function hasTeen(a, b, c) {
    // Put them in an array and check if any number fits the teen range
    return [a, b, c].some(num => num >= 13 && num <= 19);
}

function hasTeen(a, b, c) {
    // Tiny helper function that checks a single number
    const isTeen = (num) => num >= 13 && num <= 19;

    // Use the helper for all three inputs
    return isTeen(a) || isTeen(b) || isTeen(c);
}

function hasTeen(a, b, c) {
    // 1. Define the single helper function
    const isTeen = num => num >= 13 && num <= 19;

    // 2. Put inputs in an array and use .some() to test them with the helper
    return [a, b, c].some(isTeen);
}
console.log(hasTeen(13, 20, 10)); //→ true
console.log(hasTeen(20, 19, 10)); //→ true
console.log(hasTeen(20, 10, 13));// → true*/)
/*Warmup-1 -- loneTeen
We'll say that a number is 'teen' if it is in the range 13..19 inclusive. Given 2 int values, return true if one or the other is teen, but not both.

Examples

loneTeen(13, 99) → true
loneTeen(21, 19) → true
loneTeen(13, 13) → false*/

function loneTeen(a, b) {
    const a = (a >= 13 && a <= 19);
    const b = (b >= 13 && b <= 19);
    switch (true) {
        case (a && b):
            return false;

        case (a || b):
            return true;
    }
    return false;
}

function loneTeenShortcut(a, b) {
    const aIsTeen = (a >= 13 && a <= 19);
    const bIsTeen = (b >= 13 && b <= 19);

    // The ^ operator returns true ONLY if one side is true and the other is false
    return aIsTeen ^ bIsTeen;
}
console.log(loneTeen(13, 99));// → true
console.log(loneTeen(21, 19)); //→ true
console.log(loneTeen(13, 13)); //→ false*/)

/*Warmup-1 -- delDel
Given a string, if the string "del" appears starting at index 1, return a string where that "del" has been deleted. Otherwise, return the string unchanged.

Examples

delDel('adelbc') → abc
delDel('adelHello') → aHello
delDel('abcdel') → abcdel*/

function delDel(str) {
    // 1. Check if the 3 letters starting at index 1 match "del"
    if (str.substring(1, 4) === "del") {
        // 2. Glue index 0 to everything after index 4
        return str[0] + str.substring(4);
    }

    // 3. Otherwise, return it completely unchanged
    return str;
}
console.log(delDel('adelbc'));// → abc
console.log(delDel('adelHello'))// → aHello
console.log(delDel('abcdel')); //→ //abcdel*/
/*Warmup-1 -- mixStart
Return true if the given string begins with 'mix', except the 'm' can be anything, so 'pix', '9ix' .. all count.

Examples

mixStart('mix snacks') → true
mixStart('pix snacks') → true
mixStart('piz snacks') → false*/
function mixStart(str) {
    // If the string doesn't even have 3 characters, it can't match the pattern!
    if (str.length < 3) return false;
    return (str.substring(1, 3) === "ix")

}
console.log(mixStart('mix snacks'));
console.log(mixStart('pix snacks'));
console.log(mixStart('piz snacks'));