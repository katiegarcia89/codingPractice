# //TO RUN: python3 codingPractice.py
# // #### Day 1: Valid Anagram

# // Given two strings, `s` and `t`, return `true` if `t` is an anagram of `s`.
# // Otherwise, return `false`.

# // An anagram is formed by rearranging the letters of another word while using
# // each original letter exactly once.

# // **Examples**

# // - Input: `s = "anagram"`, `t = "nagaram"`
# // - Output: `true`

# // - Input: `s = "rat"`, `t = "car"`
# // - Output: `false`

# // **Possible Approaches**

# // - **Sorting:** Sort both strings and determine whether the sorted results are
# //   identical. This approach has a time complexity of `O(n log n)`.

# // - **Frequency counter:** Count how often each character occurs in `s` and
# //   subtract the corresponding counts while processing `t`. The strings are
# //   anagrams if they have equal lengths and every final count is zero. This
# //   approach has a time complexity of `O(n)`.
# //let counts = {};//reminded myself about global variables
def validAnagram(s, t):
     if len(s) != len(t):
      return False
     counts = {}
     for i in range(0, len(s)):
         letter = s[i]
         #how to write undefined... not in
         if letter not in counts:
             counts[letter] = 1
         else:
            counts[letter] = counts[letter]+ 1
     for j in range(0, len(t)):
         letter = t[j]
         if letter not in counts or counts[letter]==0: 
             return False 
         else:
             counts[letter] = counts[letter] -1
             
             return True

print("Day 1: Valid Anagram: ")
print(validAnagram("anagram", "nagaram"))# true
print(validAnagram("rat", "car"))# false

#day 2

# //Day 2 Palindrom Review: 
# // The Problem
# // Given a string s, return true if it is a palindrome, and false otherwise.
# // Examples
# // Input: s = "racecar"
# // Output: true (Backward it is still "racecar")
# // Input: s = "hello"
# // Output: false (Backward it is "olleh", which doesn't match

def palindromReview(s):
    for i in range(0, len(s)):
        j = len(s) -1 - i
        if s[i] != s[j]:
            return False
        
    return True
print("Day 2: Palindrom Review Results: ")
print(palindromReview("racecar"))
print(palindromReview("hello"))
    
#     //day 3

# //day 3: Find the Highest and Lowest Number

# //  Given an array (or list) of numbers, write a function that returns both the highest and the lowest numbers found in that array.

# //  ExamplesInput: nums = [3, 5, 1, 9, 2]
# //  Output: Highest: 9, Lowest: 1
# //  Input: nums = [-4, 0, 15, -12]
# //  Output: Highest: 15, Lowest: -12
def minMax(nums):
    minNum, maxNum = nums[0], nums[0]
    for i in range(0, len(nums)):
        if(nums[i] > maxNum):
#space on second if was inside first if so min was continuously incorrect
            maxNum = nums[i]
        if(nums[i] < minNum):
                minNum = nums[i]
                
    return [maxNum, minNum]
print("Day 3: Highest and Lowest Number: Result"); 
print(minMax([3, 5, 1, 9, 2]))
print(minMax([-4, 0, 15, -12]))
            
        