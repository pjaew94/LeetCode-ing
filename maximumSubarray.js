// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

// // Example 1:
    // Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
    // Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.
// // Example 2:
    // Input: nums = [1]
    // Output: 1
// // Example 3:
    // Input: nums = [0]
    // Output: 0
// // Example 4:
    // Input: nums = [-1]
    // Output: -1
// // Example 5:
    // Input: nums = [-2147483647]
    // Output: -2147483647

// Solution 1: Kadane's algorithm
// Description: This method creates two instances where one variable is working as a memory to distinguish the highest value, while the other
// variable is doing the addition to compare with the highest value
    // Steps:
        // 1. a1 will be used to compare the current number and the sum. If the current number is greater than the sum of the previous and the current, a1 value will update to the current value (as it's new starting point of the SUBarray). If other way, it will continue off of the previous subarray until it's able to find a higher number for the subarray.
        // 2. a2 will be used to compare the highest number held with the new sums that are being brought up from a1 variable.
            // a2 is set as nums[0] to account for arrays with length of 1
        // 3. Math.max() will return the highest value out of the given values. Here, we are comparing only 2 numbers in each Math.max()
        // 4. We will return the a2 variable as the answer, since it is the variable holding the highest value

// [-2,    1,  -3,    4,   -1,     2,      1,      -5,     4]

    -2  a1 = -2 a2 = -2
    1   a1 = -1 a2 = -1
    -3  a1 = -3 a2 = -1
    4   a1 = 4  a2 = 4
    -1  a1 = 3  a2 = 4
    2   a1 = 5  a2 = 5
    1   a1 = 6  a2 = 6
    -5  a1 = 1  a2 = 6
    4   a1 = 5  a2 = 6 


const maxSubArray = nums => {
    
    let a1 = 0
    let a2 = nums[0]
    nums.forEach((num, index) => {
      a1 = Math.max(num, a1 + num)
      a2 = Math.max(a2, a1)
    })
    return a2

}


// console.log(maxSubArray([1, 2, 5, 0]))
