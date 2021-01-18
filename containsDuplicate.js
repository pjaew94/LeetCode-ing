// Given an array of integers, find if the array contains any duplicates.

// Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

// Example 1:
// Input: [1,2,3,1]
// Output: true

// Example 2:
// Input: [1,2,3,4]
// Output: false

// Example 3:
// Input: [1,1,1,3,3,4,3,2,4,2]
// Output: true





























// Solution 1: Storage checking
// Description: Create storage and store already iterated values and check if the same number is encountered again.
const containsDuplicate = nums => {
    let storage = {};

    for (let i = 0; i < nums.length; i++) {
        if(!storage[nums[i]]) storage[nums[i]] = true;
        else return true;
    }

    return false;
}

// Solution 2: Creates map with the key and value with the number and index respectively. If the size of the map is not equal to the
//              nums.length, that means there has to be duplicate.

const containsDuplicate = nums => {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], i);
    }
    return map.size !== nums.length; 
} 
