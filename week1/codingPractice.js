//TO RUN: node codingPractice.js


/*Math.abs(value - target) <= tolerance*/
/*if (str.startsWith("not")*/
/*str.endsWith("text")
str.includes("text")
str.toLowerCase()
str.toUpperCase()
str.trim()
str.slice(start, end)
str.replace("old", "new")*/


/*Day 1: Is the number even?*/
/*Write a function that accepts an integer and returns true if the number is even and false if it is odd.*/
function isItEven(n) {

  return n % 2 == 0;

}
console.log("Day one");
console.log(isItEven(8)); // true
console.log(isItEven(7)); //false

/*Day 2: Write a function that takes a string and returns true if it is a 
palindrome and false otherwise. A palindrome reads the same forward and backward, such as "racecar"*/

function isItPalindrome(word) {
  let newWord = "";
  let otherWord = "";

  for (let i = 0; i < word.length; i++) {
    newWord += word[i];
  }
  for (let i = word.length - 1; i >= 0; i--) {
    otherWord += word[i];
  }
  return newWord === otherWord;
}
console.log("Day two");
console.log(isItPalindrome("racecar"));//true
console.log(isItPalindrome("hello"));//false

/*Day 3 
Write a function that takes a string and returns the first character that appears only once.

Examples:

Input:  "swiss"
Output: "w"

Input:  "aabbcddee"
Output: "c"*/
function firstCharacter(word) {
  const charCount = {};

  //count how many times each character appears
  for (let i = 0; i < word.length; i++) {
    const char = word[i];
    // if the character does not exist yet, add it to the object
    charCount[char] = (charCount[char] || 0) + 1; 

  }
  // compare which character is equal to 1
  for (const char of word) {
    //for (let i = 0; i < word.length; i++) {
    //const char = word[i];
    if (charCount[char] === 1) {
      return char;
    }
  }
  return "there is not a single character";
}

console.log("Day three");
console.log(firstCharacter("swiss"));
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

function howManyVowels(word) {
  let countVowels = 0;
  for (let i = 0; i < word.length; i++) {
    let c = word[i].toLowerCase();
    if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u' || c == 'y') {
      countVowels++;
    }
  }
  return countVowels;
}
console.log("Day four");
console.log(howManyVowels("hEllO"));

/*
 * Day 5: Write a function that takes an array (or list) of unique numbers from
 * 0 to n.
 * One number from that exact sequence is completely missing.
 * Your function needs to find and return that missing number.
 * Examples:Input: [3, 0, 1] (The sequence should be 0 to 3, but 2 is missing)
 * Output: 2Input: [0, 1, 3, 4] (The sequence should be 0 to 4, but 2 is
 * missing)Output: 2T
 */
function missingNumber(numArray) {

  for (let i = 0; i <= numArray.length; i++) {
    // Check if the current number 'i' is missing from the array
    if (!numArray.includes(i)) {
      return i; // Found it! Return it immediately.
    }
  }

}
console.log("Day five");
console.log(missingNumber([0, 1, 3, 4])); //2
console.log(missingNumber([2, 1, 4, 0])); //3

function findMissingWithSorting(numArray) {
  // 1. Sort the numbers from smallest to largest
  numArray.sort((a, b) => a - b);

  // 2. Loop through and check if the number matches the index 'i'
  for (let i = 0; i < numArray.length; i++) {
    if (numArray[i] !== i) {
      return i; // Found it! (e.g., index 2 holds '3', so 2 is missing)
    }
  }

  // 3. If the loop finishes and nothing was missing in the middle, 
  // then the very next number at the end is the missing one.
  return numArray.length;
}

console.log(findMissingWithSorting([3, 0, 1])); // Output: 2
console.log(`Day 6 Challenge: Two Sum -- Target Match`);
console.log(`Write a function that takes an array of numbers and a single target number. 
The function needs to find two different numbers inside that array that add up exactly to the target number. 
Return those two numbers as a new array.
Rule: 
You cannot use the exact same array element twice to make the sum.
Assumption: There will always be exactly one valid solution.
Examples:
Input: Array: [2, 7, 11, 15], Target: 9
Output: [2, 7] (because 2 + 7 = 9)
Input: Array: [3, 2, 4], Target: 6
Output: [2, 4] (because 2 + 4 = 6)`);

function twoSum(numArray, target) {

  // 1. The outer loop picks the first number (i)
  for (let i = 0; i < numArray.length; i++) {
    // 2. The inner loop picks a second number (j)
    // Starting 'j' at 'i + 1' ensures we never check the same element twice!
    for (let j = i + 1; j < numArray.length; j++) {

      // 3. Your if statement checks if they equal the target
      if (numArray[i] + numArray[j] === target) {
        return [numArray[i], numArray[j]]; // Found them! Return them as a new array.
      }
    }
  }
}


console.log(twoSum([2, 7, 11, 15], 9)); // Output: [2, 7]
console.log(twoSum([3, 2, 4], 6));      // Output: [2, 4]

function twoSumMap(numArray, target) {
  // 1. Create an empty Map to act as our memory bank
  const seenNumbers = new Map();

  // 2. Loop through the array exactly ONCE
  for (let i = 0; i < numArray.length; i++) {
    const currentNum = numArray[i];
    
    // Calculate the exact partner number we need
    const neededPartner = target - currentNum;

    // 3. Check if our memory bank already holds the needed partner
    if (seenNumbers.has(neededPartner)) {
      // We found a match! Return the partner and the current number.
      return [neededPartner, currentNum];
    }

    // 4. If we haven't seen the partner yet, store the current number 
    // in the memory bank so future numbers can look for it.
    seenNumbers.set(currentNum, true);
  }
}

console.log(twoSumMap([2, 7, 11, 15], 9)); // Output: [2, 7]
console.log(twoSumMap([3, 2, 4], 6));      // Output: [2, 4]






