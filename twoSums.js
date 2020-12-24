// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Example 1:
    // Input: nums = [2,7,11,15], target = 9
    // Output: [0,1]
    // Output: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:
    // Input: nums = [3,2,4], target = 6
    // Output: [1,2]

// Example 3:
    // Input: nums = [3,3], target = 6
    // Output: [0,1]

// Constraints:
    // 2 <= nums.length <= 103
    // -109 <= nums[i] <= 109
    // -109 <= target <= 109
    // Only one valid answer exists.



// Solution 1: Brute Force
// Description: Using for loop to iterate through each index of the array and using another for loop inside of it to add to the current index.
// Time Complexity: O(n^2)

const bruteForceTwoSums = (arr, target) => {
    var result = [];

    for(var i = 0; i < arr.length - 1; i++) {
        for(var z = i + 1; z < arr.length - 1; z++) {
            if(arr[i] + arr[z] === target) {
                result.push(i, z)
            }
        }
    }

    return result
}

console.log(bruteForceTwoSums([2, 7, 11, 15], 9))



// Solution 2: Hashmap?
// Description: Storing index and difference value in an object and matching while looping
    // Detailed:
        // 1. First index of the array WILL return undefined (because there is nothing in storage)
        // 2. Since its undefined, it will find the difference between that number and the target number. That will be stored as the key and the index as the value.
        // 3. It will continue to do this until the if condition is met, which is there will be a difference already matched from storage.
        // 4. Once the difference is matched, it will take the index of that number where the difference was matched with the current index where it found it.
// Time Complexity: On

const hashMapTwoSums = (arr, target) => {
    // Storage will hold the difference 
    let storage = {}

    // ES6 syntax for for loop. It is iterating through 'arr' array. It is destructuring the index of it and the value as 'num'.
    for(let [index, num] of arr.entries()) {
        
        if(storage[num] !== undefined) return [storage[num], index];
        storage[target-num] = index;
    }
}


