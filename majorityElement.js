// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

// Example 1:
// Input: nums = [3,2,3]
// Output: 3

// Example 2:
// Input: nums = [2,2,1,1,1,2,2]
// Output: 2
 

// Constraints:
// n == nums.length
// 1 <= n <= 5 * 104
// -231 <= nums[i] <= 231 - 1
 

// Follow-up: Could you solve the problem in linear time and in O(1) space?


// Solution 1: O(1). Loop once.
// Description: This solution is heavily dependant on the fact that majority number appears n/2 times.
    // Steps:
        // 1. Begin comparison with majorityNumber starting at 0 index of the array.
        // 2. Begin count as 1 to account for 0 index of the array value;
        // 3. Create for loop starting at index 1.
        // 4. If the count is 0 (which means the current value does not match the previous value), then make the current value the majority value.
        // 5. If the count is greater than 0, then we will check if the current value at the index is equal to the majorityNumber value.
        //    If so, we will increment by 1, if not we will deplete by 1.
        // 6. NOTICE that it is possible for the majority number to be dismissed in middle of for loop. If it truly is the majority number,
        //    It will resurface as the majorityNumber BECAUSE it appears n/2 times (more than half of nums.length).
        //    If the majority number value did not appear more than half, this solution will not work.

const majorityElement = nums => {
    let majorityNumber = nums[0];
    let count =1;
    
    for(let i=1;i<nums.length;i++){
        if(count === 0){
            majorityNumber = nums[i]
        }
        count = nums[i] === majorityNumber ? count+1:count-1;
    }
    return majorityNumber;
}
