/*TO RUN
g++ codingPractice.cpp -o codingPractice
./codingPractice
*/
/*The Problem: Find the Missing Drone
A logistics company tracks its delivery drones using unique integer IDs.
Drones are always sent out in pairs for safety.
However, due to a technical glitch, one drone was deployed without its partner.
You are given an array of integers representing the IDs of all deployed drones.
Every ID appears exactly twice, except for one unique ID which appears only once.
Find and return the ID of the single, unpaired drone.Constraints
The array will always contain at least one element.You must solve this with a linear time complexity, O(n).
Can you solve it using only O(1) extra space?

Input: drones = [4, 1, 2, 1, 2]
Output: 4

Input: drones = [7, 3, 5, 3, 5, 7, 9]
Output: 9
*/
#include <iostream> // Required for cout so you can print results to the scree
#include <vector> // Required for vector<string> to hold your list of words.
#include <string> //day 2 Required for using standard string variables.
#include <cctype> //required for toupper to inspect characters
using namespace std;

int missingDrone(vector<int> drone)

{
    int unpaired = 0;
    for (int n = 0; n < drone.size(); n++)
    {
        unpaired = unpaired ^ drone[n];
    }
    return unpaired;
}
/*The Problem: The Sentence CleanerYou are building a content moderation tool for a blog. 
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

int upperCase(string sentence)
{
    int counter = 0;
    // no .split function.. need to create a loop
    vector<string> words;
    string currentWord = "";
    for (int i = 0; i < sentence.length(); i++)
    {
        if (sentence[i] != ' ')
        {
            // build the word letter by letter
            currentWord += sentence[i];
        }
        else
        { // found a space... save the completed word
            if (currentWord != "")
            {
                words.push_back(currentWord);
                currentWord = "";
            }
        }
    }
    // grab the very last word after the loop ends
    if (currentWord != "")
    {
        words.push_back(currentWord);
    }
    // uppercase logic
    for (int i = 0; i < words.size(); i++)
    {
        bool isUpperCase = true;
        string currentWord = words[i];
        for (int j = 0; j < currentWord.size(); j++)
        {
            char letter = currentWord[j];
            if (letter != toupper(letter))
            {
                isUpperCase = false;
            }
        }
        if (isUpperCase)
        {
            counter++;
        }
    }
    return counter;
}
int main()
{
    cout << "Day 1:" << endl;

    // Fix: Change type to 'int' and print it out using cout
    int result1 = missingDrone({1, 2, 2, 1, 4});
    cout << "Test 1 Output: " << result1 << endl; // Output: 4

    int result2 = missingDrone({7, 3, 5, 3, 5, 7, 9});
    cout << "Test 2 Output: " << result2 << endl; // Output: 9
    //Day 2
    cout << "Day 2: " << upperCase("The NEW website looks AMAZING") << endl;
    return 0;
}
