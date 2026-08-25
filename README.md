# Interview Problems in Six Languages

This repository documents my practice solving interview-style programming
problems in six programming languages:

- C++
- C#
- Java
- JavaScript
- Python
- PHP

## Purpose

I created this project to strengthen my algorithmic thinking, prepare for
entry-level software-development interviews, and compare how the same logic is
expressed across different programming languages.

Rather than memorizing completed solutions, I focus on understanding the
problem-solving process. I usually begin with JavaScript, test my reasoning,
and then translate the solution into the other five languages.

## Practice Goal

My goal is to complete one interview-style programming problem per day, six
days per week.

For each problem, I:

1. Attempt the problem independently.
2. Develop and test the JavaScript solution.
3. Review the logic and investigate edge cases.
4. Translate the solution into C++, C#, Java, Python, and PHP.
5. Compare the syntax and language-specific approaches.
6. Recreate the JavaScript solution from memory the following day before
   beginning a new problem.

If I remember the logic but need to look up syntax, I still consider that a
successful review. The goal is to understand and retain the problem-solving
approach—not memorize every function or language rule.

The seventh day is reserved for working on my PawStop pet-resource project or
taking a rest day.

This schedule is a flexible learning goal rather than an inflexible deadline.
Travel, vacations, illness, and unexpected events may reduce the number of
problems completed during a particular week. The overall objective is
consistent, long-term improvement.

## Learning Process

I attempt each problem before requesting a completed solution. When needed, I
use official documentation and AI as tutoring resources to:

- Look up unfamiliar syntax
- Request targeted hints
- Review my logic
- Identify potential edge cases
- Compare alternative approaches
- Understand language-specific conventions

I review suggested code carefully and ask follow-up questions until I
understand how and why it works.

## Language References

- [JavaScript — MDN JavaScript Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)
- [Python — Official Python Documentation](https://docs.python.org/)
- [Java — Dev.java](https://dev.java/)
- [C# — Microsoft .NET Documentation](https://learn.microsoft.com/en-us/dotnet/)
- [C++ — cppreference](https://en.cppreference.com/)
- [PHP — PHP Manual](https://www.php.net/manual/en/)

## Repository Organization

The solutions are organized by practice week. Each weekly folder contains one
source file for each programming language, with the daily solutions stored in
the corresponding file.

```text
codingPractice/
├── README.md
├── run-week.sh
├── week1/
│   ├── codingPractice.cpp
│   ├── codingPractice.cs
│   ├── codingPractice.java
│   ├── codingPractice.js
│   ├── codingPractice.php
│   └── codingPractice.py
└── week2/
    ├── codingPractice.cpp
    ├── codingPractice.cs
    ├── codingPractice.java
    ├── codingPractice.js
    ├── codingPractice.php
    └── codingPractice.py
└── week3/
    ├── codingPractice.cpp
    ├── codingPractice.cs
    ├── codingPractice.java
    ├── codingPractice.js
    ├── codingPractice.php
    └── codingPractice.py
```
## Running the Solutions

The repository includes a Bash script that displays the selected week's
problem descriptions and runs the solutions in all six programming languages.

From the repository's root directory, give the script executable permission:

```bash
chmod +x run-week.sh

This permission normally only needs to be added once.

Run a week by passing its number to the script:

./run-week.sh 1

## Problems

### Week 1

#### Day 1: Is the Number Even?

Write a function that accepts an integer and returns `true` if the number is
even and `false` if it is odd.

**Example**

- Input: `8`
- Output: `true`

---

#### Day 2: Palindrome Checker

Write a function that takes a string and returns `true` if it is a palindrome
and `false` otherwise.

A palindrome reads the same forward and backward.

**Examples**

- Input: `"racecar"`
- Output: `true`
- Input: `"hello"`
- Output: `false`

---

#### Day 3: First Unique Character

Write a function that takes a string and returns the first character that
appears only once.

**Examples**

- Input: `"swiss"`
- Output: `"w"`
- Input: `"aabbcddee"`
- Output: `"c"`

---

#### Day 4: Count the Vowels

Write a function that takes a string and returns the number of vowels it
contains.

The function should recognize both uppercase and lowercase vowels.

**Examples**

- Input: `"hello"`
- Output: `2`
- Input: `"computer"`
- Output: `3`

---

#### Day 5: Find the Missing Number

Write a function that takes an array of unique numbers from `0` through `n`.
One number from that sequence is missing. Find and return the missing number.

**Examples**

- Input: `[3, 0, 1]`
- Output: `2`
- Input: `[0, 1, 3, 4]`
- Output: `2`

---

#### Day 6: Two Sum — Target Match

Write a function that takes an array of numbers and a target number. Find two
different numbers in the array that add up to the target and return those
numbers as a new array.

The same array element cannot be used twice. Assume that each input has exactly
one valid solution.

**Examples**

- Input: `[2, 7, 11, 15]`, target `9`
- Output: `[2, 7]`
- Input: `[3, 2, 4]`, target `6`
- Output: `[2, 4]`

---

#### Bonus Practice: Word Reversal — The Sentence Flipper

Write a function that takes a sentence and reverses the order of its words.
The spelling of each word should remain unchanged.

**Examples**

- Input: `"hello world"`
- Output: `"world hello"`
- Input: `"coding is fun"`
- Output: `"fun is coding"`

**Current status:** Completed in Java.

### Week 2

Week 2 coincided with travel, so fewer problems were completed.

#### Day 1: Find the Missing Drone

A logistics company tracks its delivery drones using unique integer IDs.
Drones are normally sent out in pairs, but one drone was deployed without its
partner.

Given an array of drone IDs in which every ID appears exactly twice except for
one, find and return the unpaired drone ID.

**Constraints**

- The array contains at least one element.
- The solution must have `O(n)` time complexity.
- The solution should use `O(1)` additional space.

**Examples**

- Input: `[4, 1, 2, 1, 2]`
- Output: `4`
- Input: `[7, 3, 5, 3, 5, 7, 9]`
- Output: `9`

---

#### Day 2: The Sentence Cleaner

Write a function that counts the fully uppercase words in a sentence.

A word counts only when all of its letters are uppercase. Words containing
lowercase letters or numbers do not count.

**Constraints**

- The sentence contains letters and spaces.
- The solution must have `O(n)` time complexity, where `n` is the length of the
  sentence.

**Examples**

- Input: `"The NEW website looks AMAZING"`
- Output: `2`
- Input: `"keep learning every single day"`
- Output: `0`

### Week 3 

#### Day 1: Valid Anagram

Given two strings, `s` and `t`, return `true` if `t` is an anagram of `s`.
Otherwise, return `false`.

An anagram is formed by rearranging the letters of another word while using
each original letter exactly once.

**Examples**

- Input: `s = "anagram"`, `t = "nagaram"`
- Output: `true`

- Input: `s = "rat"`, `t = "car"`
- Output: `false`

**Possible Approaches**

- **Sorting:** Sort both strings and determine whether the sorted results are
  identical. This approach has a time complexity of `O(n log n)`.

- **Frequency counter:** Count how often each character occurs in `s` and
  subtract the corresponding counts while processing `t`. The strings are
  anagrams if they have equal lengths and every final count is zero. This
  approach has a time complexity of `O(n)`.

---

  #### Day 2: Palindrom Review
 Given a string s, return true if it is a palindrome, and false otherwise.
 A palindrome is a word that reads the exact same backward as forward (ignoring spaces, punctuation, and capitalization—though for this basic version, we will assume the input is already lowercase and has no spaces).

 **Examples**

- Input: s = "racecar"
- Output: true 
- Input: s = "hello"
- Output: false 

**Possible Approaches**

 **The Reverse Shortcut:** (Like your .split().reverse().join())Flip the entire string backward using language shortcuts, and check if the reversed string matches the original string exactly.
 - Pros: Very few lines of code.
 - Cons: Takes up extra memory because you have to create a whole new reversed string/array.
 
**The Two-Pointer Method** (Optimal)Instead of copying or reversing anything, you use two index counters at the same time:
Pointer i starts at the very beginning (index 0) and moves forward (i++).
Pointer j starts at the very end (index length - 1) and moves backward (j--).
You run a loop where you compare s[i] and s[j]. 
If they ever don't match, you instantly return false. 
If i and j meet in the middle and every letter matched, you return true.

## Skills Practiced

- Algorithmic problem-solving
- Arrays and collections
- Strings and character processing
- Loops and nested loops
- Conditional logic
- Hash maps and dictionaries
- Time and space complexity
- Testing and edge-case analysis
- Debugging across multiple languages
- Translating algorithms between languages

## Running the Solutions

Each source file includes the terminal command needed to run or compile that
language. Run the commands from inside the appropriate weekly folder.

The required language runtimes and compilers must be installed locally.

## About Me

I am a recent Computer Information Systems graduate building practical
experience in software development, testing, SQL, and problem-solving.

View more of my work at [katiegarcia.dev](https://katiegarcia.dev).