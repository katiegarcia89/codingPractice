
/*TO RUN: 
javac codingPractice.java
java codingPractice
*/
import java.util.HashMap;
import java.util.Arrays; //day 5

/*Day 1: Is the number even?
Interview question:
Write a function that accepts an integer and returns true if the number is even and false if it is odd.*/

public class codingPractice {

    static boolean isEven(int n) {
        return n % 2 == 0;
    }

    // Day 2: Write a function that takes a string and returns true if it is a
    // palindrome and false otherwise. A palindrome reads the same forward and
    // backward, such as "racecar"

    static boolean isItPalindrome(String word) {
        String newWord = "";
        String oldWord = "";

        for (int i = 0; i < word.length(); i++) {
            newWord += word.charAt(i);
        }

        for (int i = word.length() - 1; i >= 0; i--) {
            oldWord += word.charAt(i);
        }
        return newWord.equals(oldWord);
    }

    /*
     * Day 3
     * Write a function that takes a string and returns the first character that
     * appears only once.
     * 
     * Examples:
     * 
     * Input: "swiss"
     * Output: "w"
     * 
     * Input: "aabbcddee"
     * Output: "c"
     */
    public static String firstCharacter(String word) {
        // Keys are Character objects, Values are Integer objects
        HashMap<Character, Integer> charCount = new HashMap<>();

        // Loop 1: Count characters
        for (int i = 0; i < word.length(); i++) {
            char c = word.charAt(i);

            // Java shortcut: .getOrDefault returns the old count OR 0 if brand new
            charCount.put(c, charCount.getOrDefault(c, 0) + 1);
        }

        // Loop 2: Find the unique character
        for (int i = 0; i < word.length(); i++) {
            char c = word.charAt(i);
            if (charCount.get(c) == 1) {
                return String.valueOf(c); // Convert char to string
            }
        }

        return "there is not a single character";
    }

    /*
     * Day 4
     * Write a function that takes a string and returns how many vowels it contains.
     * 
     * Example:
     * 
     * Input: "hello"
     * Output: 2
     * Input: "computer"
     * Output: 3
     */
    public static int howManyVowels(String word) {
        int countVowels = 0;

        // word = word.toLowerCase();
        for (int i = 0; i < word.length(); i++) {
            char c = Character.toLowerCase(word.charAt(i));
            // if (word.charAt(i) == 'a' || word.charAt(i) == 'e' || word.charAt(i) == 'i'
            // || word.charAt(i) == 'o'
            // || word.charAt(i) == 'u') {
            if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u') {
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

    public static int missingNumber(int[] numArray) {
        // no length() just length for arrays

        // 2. Loop from 0 up to and including n
        for (int i = 0; i <= numArray.length; i++) {

            // Final variable needed for the lambda expression inside anyMatch
            int currentTarget = i;

            // Check if 'i' is NOT in the array
            // Arrays.stream(numArray).anyMatch(x -> x == currentTarget) returns true if
            // found.
            // The '!' flips it to mean "is NOT found".
            if (!Arrays.stream(numArray).anyMatch(x -> x == currentTarget)) {
                return i; // Found it! Return it immediately.
            }
        }

        return -1; // Default fallback required by Java
    }
    // Day 6 Challenge: Two Sum -- Target Match

    // Write a function that takes an array of numbers and a single target number.
    // The function needs to find two different numbers inside that array that add
    // up exactly to the target number.
    // Return those two numbers as a new array.
    // Rule:
    // You cannot use the exact same array element twice to make the sum.
    // Assumption: There will always be exactly one valid solution.
    public static int[] twoSum(int[] numArray, int target) {
        for (int i = 0; i < numArray.length; i++) {

            for (int j = i + 1; j < numArray.length; j++) {
                if (numArray[i] + numArray[j] == target) {

                    return new int[] { numArray[i], numArray[j] };
                }
            }
        }
        // 3. Fallback: Return an empty integer array
        return new int[] {};
    }

    // Day 7 Challenge: Word Reversal (The Sentence Flipper)
    // Write a function that takes a sentence (a string of words separated by
    // spaces)
    // and reverses the order of the words. The words themselves should stay spelled
    // normally,
    // but their position in the sentence should flip completely.
    // Examples:
    // Input: "hello world"
    // Output: "world hello"
    // Input: "coding is fun"
    // Output: "fun is coding"

    public static String reverseWords(String sentence) {
        // Step 1: Split the sentence into an array of words wherever there is a space
        String[] words = sentence.split(" ");

        // Create an empty array of the exact same size to hold our flipped words
        String[] flippedWords = new String[words.length];

        // Step 2: Loop backward through the original words array
        int index = 0;
        for (int i = words.length - 1; i >= 0; i--) {
            flippedWords[index] = words[i];
            index++;
        }

        // Step 3: Glue the flipped words back together with a space in between
        return String.join(" ", flippedWords);
    }

    public static void main(String[] args) {
        // Day 1
        System.out.println(isEven(8));
        // Day 2
        System.out.println(isItPalindrome("racecar"));// true
        System.out.println(isItPalindrome("hello")); // false
        // Day 3
        System.out.println(firstCharacter("swiss"));
        // Day 4
        System.out.println(howManyVowels("hEllO")); // 2
        // Day 5
        System.out.println(missingNumber(new int[] { 0, 1, 3, 4 }));// 2
        // Day 6
        // Pass the array using the explicit 'new int[]' syntax inline
        int[] result = twoSum(new int[] { 2, 7, 11, 15 }, 9);

        // Use Arrays.toString() to print the contents of the array cleanly
        System.out.println("Day 6 Result: " + Arrays.toString(result));
        // Output on screen: Day 6 Result: [2, 7]
        System.out.println("Day 7 Test 1: " + reverseWords("hello world"));
        // Output: world hello

        System.out.println("Day 7 Test 2: " + reverseWords("coding is fun"));
    }

}
