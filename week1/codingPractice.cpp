/*TO RUN
g++ codingPractice.cpp -o codingPractice
./codingPractice
*/
/*Day 1: Is the number even?
Interview question:
Write a function that accepts an integer and returns true if the number is even and false if it is odd.*/
#include <iostream>      // day 1
#include <algorithm>     //day 2
#include <string>        //day 2
#include <unordered_map> //day 3
#include <cctype>        // day 4
#include <vector>        //day 5

using namespace std;

bool isEven(int n)
{
    return n % 2 == 0;
}
/*int main()
{
    cout << boolalpha << isEven(8);
    // prints true to the screen instead of 1 ( 1 = true, 0 = false)
    // boolalpha makes cout output true... without boolalpha... it would output 1
}*/

// Day 2: Write a function that takes a string and returns true if it is a
// palindrome and false otherwise. A palindrome reads the same forward and backward, such as "racecar"

bool isItPalindrome(string word) // include algorithm and string for this
{
    string newWord = "";
    string oldWord = "";
    for (int i = 0; i < word.length(); i++)
    {
        newWord += word[i];
    }

    for (int i = word.length() - 1; i >= 0; i--)
    {
        oldWord += word[i];
    }
    return newWord == oldWord;
}

bool isItPalindromeA(string word)
{

    string reversedWord = word; // copies the string
    reverse(reversedWord.begin(), reversedWord.end());

    return word == reversedWord;
}
/*Day 3
Write a function that takes a string and returns the first character that appears only once.

Examples:
Input:  "swiss"
Output: "w"
Input:  "aabbcddee"
Output: "c"*/

string firstCharacter(string word)
{
    // add unordered_Map
    unordered_map<char, int> charCount;
    // Loop 1: Count how many times each character appears
    for (int i = 0; i < word.length(); i++)
    {
        char c = word[i];
        charCount[c]++; // C++ automatically initializes new keys to 0, then adds 1!
    }
    // Loop 2: Find the first character with a count of 1
    for (int i = 0; i < word.length(); i++)
    {
        char c = word[i];
        if (charCount[c] == 1)
        {
            return string(1, c);
        }
    }
    return "there is not a single character";
}
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
int howManyVowels(string word)
{
    int countVowels = 0;
    for (int i = 0; i < word.length(); i++)
    {
        char c = tolower(word[i]);
        if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u' || c == 'y')
        {
            countVowels++;
        }
    }
    return countVowels;
}
/*
 * Day 5: Write a function that takes an array (or list) of unique numbers from
 * 0 to n.
 * One number from that exact sequence is completely missing.
 * Your function needs to find and return that missing number.
 * Examples:Input: [3, 0, 1] (The sequence should be 0 to 3, but 2 is missing)
 * Output: 2Input: [0, 1, 3, 4] (The sequence should be 0 to 4, but 2 is
 * missing)Output: 2T
 */
int missingNumber(vector<int> numArray)
{
    for (int i = 0; i <= numArray.size(); i++)
    {
        // searches the vector from start to end.
        // If it reaches the 'end()', it means the number was NOT found.
        if (find(numArray.begin(), numArray.end(), i) == numArray.end())
        {
            return i;
        }
    }
    return -1; // default fallback
}

// Day 6 Challenge: Two Sum -- Target Match

// Write a function that takes an array of numbers and a single target number.
// The function needs to find two different numbers inside that array that add up exactly to the target number.
// Return those two numbers as a new array.
// Rule:
// You cannot use the exact same array element twice to make the sum.
// Assumption: There will always be exactly one valid solution.

vector<int> twoSum(vector<int> numArray, int target)
{
    for (int i = 0; i < numArray.size(); i++)
    {
        for (int j = 1 + i; j < numArray.size(); j++)
        {
            if (numArray[i] + numArray[j] == target)
            {
                return {numArray[i], numArray[j]};
            }
        }
    }
    // ADD THIS FALLBACK RETURN HERE:
    return {}; 
}
int main()
{
    // day 1
    cout << boolalpha << isEven(8); // true
    // prints true to the screen instead of 1 ( 1 = true, 0 = false)
    // boolalpha makes cout output true... without boolalpha... it would output 1

    // day 2
    cout << (isItPalindrome("racecar") ? " TRUE " : "FALSE") << endl; // TRUE
    cout << (isItPalindrome("hello") ? "TRUE" : " FALSE ") << endl;   // FALSE

    // day 3
    cout << firstCharacter("swiss") << endl;

    // day 4
    cout << howManyVowels("hEllo") << endl; // 2

    // day 5
    cout << "Day Five " << missingNumber({3, 0, 1}) << endl;

    // day 6
    // 1. Call the function dynamically with test data
    vector<int> result = twoSum({2, 7, 11, 15}, 9);
    // 2. Start your output text label
    cout << "Day 6 Result: ";

    // 3. Automatically loop through whatever the function gave back
    for (int num : result)
    {
        cout << num << " "; // Prints each number with a space gap
    }

    cout << endl; // Safely cap it off with a clean line break
    return 0;
}
