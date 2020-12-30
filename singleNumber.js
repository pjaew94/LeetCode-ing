// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// Follow up: Could you implement a solution with a linear runtime complexity and without using extra memory?

// Example 1:
// Input: nums = [2,2,1]
// Output: 1

// // Example 2:
// Input: nums = [4,1,2,1,2]
// Output: 4

// // Example 3:
// Input: nums = [1]
// Output: 1


// Constraints:
// 1 <= nums.length <= 3 * 104
// -3 * 104 <= nums[i] <= 3 * 104
// Each element in the array appears twice except for one element which appears only once.

















// Solution 1: Very bad solution
// Description: Basically loop through each index and filter out every number except the current number. If the length of the filtered array is 1, then that means theres only one of the number in the array. Return the number
// const singleNumber = nums => {
//     for(let i = 0; i < nums.length; i++) {
//         if(nums.filter(num => nums[i] === num).length === 1) return nums[i]
//     }
// }


// Solution 2: Hashmap solution
// Description: Create hashmap memory to keep count of the number of times the number appears.
    // Steps:
        // 1. Create hashmap for memory
        // 2. Loop through nums. If the number doesn't exist in hashmap, store it with value of 1. If it already exists, add the value of that number by 1.
        // 3. Loop through the hashmap and see which key(number in nums array) appear only once. Return that number key.
const singleNumber = nums => {
    let numCounts = {};

    for (x of nums) {
        if(x in numCounts) {
            numCounts[x]++;
        } else {
            numCounts[x] = 1;
        }
    }

    for(num in numCounts) {
        if(numCounts[num] === 1) {
            return num
        }
    }
}


console.log(singleNumber([4,1,2,1,2]))