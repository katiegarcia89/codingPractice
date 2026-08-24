using System;
using System.Diagnostics.Metrics;
/*TO RUN:
dotnet run --file codingPractice.cs
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
class Program
{

    static int missingDrone(int[] drone)
    {
        int unpaired = 0;
        for (int i = 0; i < drone.Length; i++)

        {
            unpaired = unpaired ^ drone[i];
        }
        return unpaired;
    }
//     # /*The Problem: The Sentence CleanerYou are building a content moderation tool for a blog. 
// # Your task is to count how many words in a user's comment are fully uppercase.
// # You are given a string sentence containing words separated by single spaces. 
// # A word is considered fully uppercase if all of its letters are capital letters 
// # (e.g., "AI", "HELLO", "WOW"). 
// # Words containing lowercase letters (like "Hello" or "ai") or numbers do not count.
// # ConstraintsThe sentence will contain letters and spaces.
// # You must solve this with a linear time complexity, O(n), where n is the length of the string.
// # Example 1
// # Input: sentence = "The NEW website looks AMAZING"
// # Output: 2  (The uppercase words are "NEW" and "AMAZING")
// # Example 2
// # Input: sentence = "keep learning every single day"
// # Output: 0  (There are no fully uppercase words)*/
    static int upperCase(string sentence)
    {
        int counter = 0;
        //string[] words = sentence.Split(" ");
        //preferred using single ''
        string[] words = sentence.Split(' ');
        for (int i = 0; i < words.Length; i++)
        {
            string currentWord = words[i];
            bool isUpperCase = true;
            for (int j = 0; j < currentWord.Length; j++)
            {
                char letter = currentWord[j];
                if (letter != char.ToUpper(letter))
                {
                    isUpperCase = false;
                    break; 
                }

            }
            if(isUpperCase){
                counter++;
            }

        }


        return counter;
    }

    static void Main()
    {
        //day 1 
        Console.WriteLine("Day 1: ");
        Console.WriteLine(missingDrone(new int[] { 1, 2, 2, 1, 4 }));
        //day 2 
        Console.WriteLine("Day 2:");
        Console.WriteLine(upperCase("The NEW website looks AMAZING"));
    }
}