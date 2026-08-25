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
             return False; 
         else:
             counts[letter] = counts[letter] -1
             
             return True

print("Day 1: Valid Anagram: ")
print(validAnagram("anagram", "nagaram"))# true
print(validAnagram("rat", "car"))# false