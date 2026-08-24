#TO RUN: 
#python3 codingPractice.py
# 
# /*The Problem: Find the Missing Drone
# A logistics company tracks its delivery drones using unique integer IDs. 
# Drones are always sent out in pairs for safety. 
# However, due to a technical glitch, one drone was deployed without its partner.
# You are given an array of integers representing the IDs of all deployed drones. 
# Every ID appears exactly twice, except for one unique ID which appears only once. 
# Find and return the ID of the single, unpaired drone.Constraints
# The array will always contain at least one element.You must solve this with a linear time complexity, O(n).
# Can you solve it using only O(1) extra space?

# Input: drones = [4, 1, 2, 1, 2]
# Output: 4

# Input: drones = [7, 3, 5, 3, 5, 7, 9]
# Output: 9
# */


def missingDrone(drones):
    n = len(drones)
    unpaired = 0
    for num in drones:
        unpaired = unpaired ^ num
    
    return unpaired
print("Day 1")
print(missingDrone([1,2,2,1,4]))
print(missingDrone([9,3,5,3,9]))
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
def upperCase(sentence):
    counter = 0 
    words = sentence.split()
    for i in range( 0 , len(words)):
        currentWord = words[i]
        if currentWord.isupper():#isupper checks if it is capitalized
            counter = counter + 1
            
    return counter 
print("Day 2")
print(upperCase("The NEW website looks AMAZING"))

# def upperCase(sentence):
#     counter = 0
#     words = sentence.split() # Splits sentence into an array of words
    
#     # 1. Outer Loop: Go through the list of words using indexes
#     for i in range(0, len(words)):
#         currentWord = words[i]
        
#         # Assume the word is fully uppercase until we find a lowercase letter
#         isAllUpper = True
        
#         # 2. Inner Loop: Go through every single letter of the current word
#         for j in range(0, len(currentWord)):
#             letter = currentWord[j]
            
#             # Pure Logic Check: If the letter is NOT equal to its uppercase self,
#             # then it must be a lowercase letter!
#             if letter != letter.upper():
#                 isAllUpper = False
#                 break # Stop checking this word immediately
                
#         # If the inner loop finished and never found a lowercase letter, count it!
#         if isAllUpper:
#             counter = counter + 1
            
#     return counter

# print("Day 2")
# print(upperCase("The NEW website looks AMAZING")) # Output: 2


            
            
