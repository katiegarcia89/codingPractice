**\# Interview Problems in Six Languages**

This repository documents my practice solving interview-style
programming

problems in six programming languages:

-   C++

-   C#

-   Java

-   JavaScript

-   Python

-   PHP

## Purpose

I created this project to strengthen my algorithmic thinking, prepare
for entry-level software-development interviews, and maintain
familiarity with six programming languages.

My primary focus is now **JavaScript**, with **SQL** practiced
separately as a career-focused skill. Rather than trying to develop
equal fluency in all six programming languages at the same time, I use
JavaScript for deeper problem-solving practice and use the other
languages for periodic maintenance and comparison.

The goal is not to memorize completed solutions or every language's
syntax. I focus on understanding the problem-solving process,
recognizing patterns, testing my reasoning, and becoming increasingly
independent when developing solutions.

## Practice Goal

My current practice schedule prioritizes depth and consistency over
completing the same full problem in every language each day.

### Monday--Thursday: JavaScript + SQL

-   Spend approximately **45--60 minutes on JavaScript**.
-   Aim for **at least one meaningful JavaScript problem**, with one to
    two problems being a typical session.
-   Revisit older problems regularly and recreate solutions without
    looking when possible.
-   Spend approximately **20--30 minutes on SQL** using queries,
    exercises, or practical data problems.
-   Stop based primarily on focused practice time rather than forcing a
    specific number of completed problems.

### Friday: Six-Language Maintenance

Friday is reserved for lighter review across JavaScript, C++, C#, Java,
Python, and PHP.

The purpose of Friday practice is **maintenance, not equal mastery**. I
may revisit a familiar problem, review syntax, compare implementations,
or write a small solution in each language. I do not need to complete
six new interview problems.

### Weekend

The weekend is flexible and may be used for project work, including
PawStop, additional practice when I want it, or rest.

This schedule is a flexible learning goal rather than an inflexible
deadline. Travel, vacations, illness, job-search responsibilities, and
unexpected events may change an individual week. The overall objective
is consistent, long-term improvement.

## Learning Process

I attempt each problem before requesting a completed solution.
JavaScript is my primary language for developing and testing new
solutions. During maintenance practice, I may revisit the same logic in
one or more of the other languages.

When needed, I use official documentation and AI as tutoring resources
to:

-   Look up unfamiliar syntax

-   Request targeted hints

-   Review my logic

-   Identify potential edge cases

-   Compare alternative approaches

-   Understand language-specific conventions

I review suggested code carefully and ask follow-up questions until I

understand how and why it works.

**\## Language References**

-   [JavaScript --- MDN JavaScript
    Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)

-   [Python --- Official Python Documentation](https://docs.python.org/)

-   [Java --- Dev.java](https://dev.java/)

-   [C# --- Microsoft .NET
    Documentation](https://learn.microsoft.com/en-us/dotnet/)

-   [C++ --- cppreference](https://en.cppreference.com/)

-   [PHP --- PHP Manual](https://www.php.net/manual/en/)

**\## Repository Organization**

The solutions are organized by practice week. Each weekly folder
contains one

source file for each programming language, with the daily solutions
stored in

the corresponding file.

``` text

codingPractice/

├── README.md

├── Language_Cheat_Sheet.md

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

**\## Running the Solutions**

The repository includes a Bash script that displays the selected week's

problem descriptions and runs the solutions in all six programming
languages.

From the repository's root directory, give the script executable
permission:

\`\`\`bash

chmod +x run-week.sh

This permission normally only needs to be added once.

Run a week by passing its number to the script:

./run-week.sh 1

## Problems

### Week 1

#### Day 1: Is the Number Even?

Write a function that accepts an integer and returns `true` if the
number is

even and `false` if it is odd.

\*\*Example\*\*

-   Input: `8`

-   Output: `true`

------------------------------------------------------------------------

#### Day 2: Palindrome Checker

Write a function that takes a string and returns `true` if it is a
palindrome

and `false` otherwise.

A palindrome reads the same forward and backward.

\*\*Examples\*\*

-   Input: `"racecar"`

-   Output: `true`

-   Input: `"hello"`

-   Output: `false`

------------------------------------------------------------------------

#### Day 3: First Unique Character

Write a function that takes a string and returns the first character
that

appears only once.

\*\*Examples\*\*

-   Input: `"swiss"`

-   Output: `"w"`

-   Input: `"aabbcddee"`

-   Output: `"c"`

------------------------------------------------------------------------

#### Day 4: Count the Vowels

Write a function that takes a string and returns the number of vowels it

contains.

The function should recognize both uppercase and lowercase vowels.

\*\*Examples\*\*

-   Input: `"hello"`

-   Output: `2`

-   Input: `"computer"`

-   Output: `3`

------------------------------------------------------------------------

#### Day 5: Find the Missing Number

Write a function that takes an array of unique numbers from `0` through
`n`.

One number from that sequence is missing. Find and return the missing
number.

\*\*Examples\*\*

-   Input: `[3, 0, 1]`

-   Output: `2`

-   Input: `[0, 1, 3, 4]`

-   Output: `2`

------------------------------------------------------------------------

#### Day 6: Two Sum --- Target Match

Write a function that takes an array of numbers and a target number.
Find two

different numbers in the array that add up to the target and return
those

numbers as a new array.

The same array element cannot be used twice. Assume that each input has
exactly

one valid solution.

\*\*Examples\*\*

-   Input: `[2, 7, 11, 15]`, target `9`

-   Output: `[2, 7]`

-   Input: `[3, 2, 4]`, target `6`

-   Output: `[2, 4]`

------------------------------------------------------------------------

#### Bonus Practice: Word Reversal --- The Sentence Flipper

Write a function that takes a sentence and reverses the order of its
words.

The spelling of each word should remain unchanged.

\*\*Examples\*\*

-   Input: `"hello world"`

-   Output: `"world hello"`

-   Input: `"coding is fun"`

-   Output: `"fun is coding"`

\*\*Current status:\*\* Completed in Java.

### Week 2

Week 2 coincided with travel, so fewer problems were completed.

#### Day 1: Find the Missing Drone

A logistics company tracks its delivery drones using unique integer IDs.

Drones are normally sent out in pairs, but one drone was deployed
without its

partner.

Given an array of drone IDs in which every ID appears exactly twice
except for

one, find and return the unpaired drone ID.

\*\*Constraints\*\*

-   The array contains at least one element.

-   The solution must have `O(n)` time complexity.

-   The solution should use `O(1)` additional space.

\*\*Examples\*\*

-   Input: `[4, 1, 2, 1, 2]`

-   Output: `4`

-   Input: `[7, 3, 5, 3, 5, 7, 9]`

-   Output: `9`

------------------------------------------------------------------------

#### Day 2: The Sentence Cleaner

Write a function that counts the fully uppercase words in a sentence.

A word counts only when all of its letters are uppercase. Words
containing

lowercase letters or numbers do not count.

\*\*Constraints\*\*

-   The sentence contains letters and spaces.

-   The solution must have `O(n)` time complexity, where `n` is the
    length of the

    sentence.

\*\*Examples\*\*

-   Input: `"The NEW website looks AMAZING"`

-   Output: `2`

-   Input: `"keep learning every single day"`

-   Output: `0`

### Week 3

#### Day 1: Valid Anagram

Given two strings, `s` and `t`, return `true` if `t` is an anagram of
`s`.

Otherwise, return `false`.

An anagram is formed by rearranging the letters of another word while
using

each original letter exactly once.

\*\*Examples\*\*

-   Input: `s = "anagram"`, `t = "nagaram"`

-   Output: `true`

-   Input: `s = "rat"`, `t = "car"`

-   Output: `false`

\*\*Possible Approaches\*\*

-   \*\*Sorting:\*\* Sort both strings and determine whether the sorted
    results are

    identical. This approach has a time complexity of `O(n log n)`.

-   \*\*Frequency counter:\*\* Count how often each character occurs in
    `s` and

    subtract the corresponding counts while processing `t`. The strings
    are

    anagrams if they have equal lengths and every final count is zero.
    This

    approach has a time complexity of `O(n)`.

------------------------------------------------------------------------

\#### Day 2: Palindrom Review

Given a string s, return true if it is a palindrome, and false
otherwise.

A palindrome is a word that reads the exact same backward as forward
(ignoring spaces, punctuation, and capitalization---though for this
basic version, we will assume the input is already lowercase and has no
spaces).

\*\*Examples\*\*

-   Input: s = "racecar"

-   Output: true

-   Input: s = "hello"

-   Output: false

\*\*Possible Approaches\*\*

\*\*The Reverse Shortcut:\*\* (Like your .split().reverse().join())Flip
the entire string backward using language shortcuts, and check if the
reversed string matches the original string exactly.

-   Pros: Very few lines of code.

-   Cons: Takes up extra memory because you have to create a whole new
    reversed string/array.

\*\*The Two-Pointer Method\*\* (Optimal)Instead of copying or reversing
anything, you use two index counters at the same time:

Pointer i starts at the very beginning (index 0) and moves forward
(i++).

Pointer j starts at the very end (index length - 1) and moves backward
(j--).

You run a loop where you compare s\[i\] and s\[j\].

If they ever don't match, you instantly return false.

If i and j meet in the middle and every letter matched, you return true.

------------------------------------------------------------------------

\#### Day 3: Find the Highest and Lowest Number

Given an array (or list) of numbers, write a function that returns both
the highest and the lowest numbers found in that array.

ExamplesInput: nums = \[3, 5, 1, 9, 2\]

Output: Highest: 9, Lowest: 1

Input: nums = \[-4, 0, 15, -12\]

Output: Highest: 15, Lowest: -12

How to Solve It

Approach 1: The Sorting Shortcut

f you sort the array from lowest to highest first, the lowest number
will automatically be at index 0, and the highest number will be at the
very last index.

The Catch: As you learned on Day 1, sorting takes extra time ((O(n
`\log `{=tex}n))).

Interviewers will immediately ask you to do it in one pass without
sorting.

Approach 2: The Tracker Method (Optimal One-Pass)Create two tracker
variables: maxNum and minNum.

Initialize both of them to the very first number in the array
(nums\[0\]).

Loop through the rest of the array starting at index 1.

On every step, ask two questions:

Is the current number bigger than my maxNum?

If yes, update maxNum.

Is the current number smaller than my minNum?

If yes, update minNum.

Return both values after the loop finishes.

This runs in fast O(n) time.

## Skills Practiced

-   Algorithmic problem-solving

-   Arrays and collections

-   Strings and character processing

-   Loops and nested loops

-   Conditional logic

-   Hash maps and dictionaries

-   Time and space complexity

-   Testing and edge-case analysis

-   Debugging across multiple languages

-   Translating algorithms between languages

## Running the Solutions

Each source file includes the terminal command needed to run or compile
that

language. Run the commands from inside the appropriate weekly folder.

The required language runtimes and compilers must be installed locally.

## About Me

I am a recent Computer Information Systems graduate building practical

experience in software development, testing, SQL, and problem-solving.

View more of my work at [katiegarcia.dev](https://katiegarcia.dev).
