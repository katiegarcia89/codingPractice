
/*TO RUN: 
javac codingPractice.java
java codingPractice
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
public class codingPractice {

    static int missingDrone(int[] drone) {
        int unpaired = 0;
        for (int i = 0; i < drone.length; i++) {
            unpaired = unpaired ^ drone[i];
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
    static int upperCase(String sentence){
        int counter = 0 ;
        String[] words = sentence.split(" "); 
        for ( int i = 0 ; i < words.length; i ++){
            //since words is an array.. not .length() property
            String currentWord = words[i];
            boolean isAllUpper = true;
           
        //since currentWord is a string.. must use .length() property
        for (int j = 0; j < currentWord.length(); j ++){
            char letter = (currentWord.charAt(j));
            // Use Character.toUpperCase() for primitive chars
 
            if (letter !=Character.toUpperCase(letter)){
                isAllUpper = false; 
                break; 
            }
        }
        if(isAllUpper){
            counter++; 
        }
    }
        return counter; 


    }

    public static void main(String[] args) {

      System.out.println("Day 1: " + missingDrone(new int[] { 1, 2, 2, 1, 4 }));
      System.out.println("Day 2: " + upperCase("The NEW website looks AMAZING"));   
    
      } 
    }
     
      