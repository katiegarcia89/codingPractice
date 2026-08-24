#TO RUN: 
#python3 codingPractice.py

#Day 1: Is the number even?
#Interview question:
#Write a function that accepts an integer and returns true if the number is even and false if it is odd.
# Press Cmd + / (Command and the Forward Slash key) at the same time

def is_even(n):
    return n % 2 ==0 
print("Day One")
print(is_even(8)) #true
print(is_even(7)) # false

#Day 2: Write a function that takes a string and returns true if it is a 
#palindrome and false otherwise. A palindrome reads the same forward and backward, such as "racecar"

def isItPalindrome(word):
    newWord = ""
    oldWord = ""
    
    
    for i in range(0, len(word)): #len stands for length. counts the total numbers in a string
        newWord += word[i]
        
    
    for i in range(len(word) - 1, -1, -1): #range(start,stop,step) 
        #Python ranges always stop one step before this number. 
        # To include index 0 (the first letter of the word), the loop must be told to stop at -1.
        oldWord += word[i]
        
    return newWord == oldWord
print("Day Two")
print(isItPalindrome("racecar"))  # True
print(isItPalindrome("hello"))    # False

#Day 3 
#Write a function that takes a string and returns the first character that appears only once.

#Examples:

#Input:  "swiss"
#Output: "w"

#Input:  "aabbcddee"
#Output: "c"*/
def firstCharacter(word):
    charCount = {}
    for i in range(0, len(word)):
        char = word[i]  # .get(char, 0) means: get the current count, OR return 0 if brand new
        charCount[char]=charCount.get(char, 0) + 1
        
    for i in range(0, len(word)):
        char = word[i] 
        if charCount[char] == 1:
          return char
        
    return "there is not a single character"
print("Day three")   
print(firstCharacter("swiss"))

#Day 4
 #Write a function that takes a string and returns how many vowels it contains.
 #Example:
 #Input: "hello"
 #Output: 2
 #Input: "computer"
 #Output: 3
 
def howManyVowels(word):
     vowelCount = 0 
     for vowel in word: 
         c = vowel.lower()
         if c == 'a' or c == 'e' or  c == 'i' or c == 'o' or c == 'u' or c =='y':
             vowelCount += 1
             
     return vowelCount
print("Day Four")
print(howManyVowels("heLlO")) #2

# /*
#  * Day 5: Write a function that takes an array (or list) of unique numbers from
#  * 0 to n.
#  * One number from that exact sequence is completely missing.
#  * Your function needs to find and return that missing number.
#  * Examples:Input: [3, 0, 1] (The sequence should be 0 to 3, but 2 is missing)
#  * Output: 2Input: [0, 1, 3, 4] (The sequence should be 0 to 4, but 2 is
#  * missing)Output: 2T
#  */
        
def findMissingWithSorting(numArray):
    n = len(numArray)
    
    # Range(0, n + 1) generates numbers from 0 up to n
    for i in range(0, n + 1):
        # This is the exact same as !numArray.includes(i)
        if i not in numArray:
            return i

print("Day Five")
print(findMissingWithSorting([3, 0, 1]))     # Output: 2
print(findMissingWithSorting([0, 1, 3, 4]))  # Output: 2

print("Day 6 Challenge: Two Sum -- Target Match")
#Day 6
print("""Write a function that takes an array of numbers and a single target number. 
The function needs to find two different numbers inside that array that add up exactly to the target number. 
Return those two numbers as a new array.
Rule: 
You cannot use the exact same array element twice to make the sum.
Assumption: There will always be exactly one valid solution. """)
# Examples:
# Input: Array: [2, 7, 11, 15], Target: 9
# Output: [2, 7] (because 2 + 7 = 9)
# Input: Array: [3, 2, 4], Target: 6
# Output: [2, 4] (because 2 + 4 = 6)""")

def twoSum(numArray, target):
    
    for i in range(0, len(numArray)):
        
        # Start j at 'i + 1' so you don't use the same element twice
        for j in range(i + 1, len(numArray)):
            
            if numArray[i] + numArray[j] == target:
                return [numArray[i], numArray[j]]

print(twoSum([2, 7, 11, 15], 9)) 
# Output: [2, 7]
        

        
        
        
        
