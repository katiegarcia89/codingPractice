//TO RUN: node codingPractice.js

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
function missingDrone(drones) {
    //^ NEVER means to the power of.
    let unpaired = 0;

    for ( let n = 0 ; n < drones.length; n ++){
        unpaired = unpaired ^ drones[n]; 
    }
    return unpaired; 

}
console.log("Day 1: "); 
console.log(missingDrone([1,2,2,1,4])); // 4
console.log(missingDrone([9,3,5,3,9])); // 5