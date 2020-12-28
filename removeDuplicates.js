// Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length.
// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

// Clarification:
// Confused why the returned value is an integer but your answer is an array?
// Note that the input array is passed in by reference, which means a modification to the input array will be known to the caller as well.
// Internally you can think of this:

// nums is passed in by reference. (i.e., without making a copy)
    int len = removeDuplicates(nums);

    // any modification to nums in your function would be known by the caller.
    // using the length returned by your function, it prints the first len elements.
    for (int i = 0; i < len; i++) {
        print(nums[i]);
    }


// Example 1:
    // Input: nums = [1,1,2]
    // Output: 2, nums = [1,2]
    // Explanation: Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively. 
    // It doesn't matter what you leave beyond the returned length.

// Example 2:
    // Input: nums = [0,0,1,1,1,2,2,3,3,4]
    // Output: 5, nums = [0,1,2,3,4]
    // Explanation: Your function should return length = 5, with the first five elements of nums being modified to 0, 1, 2, 3, and 4 respectively. 
    // It doesn't matter what values are set beyond the returned length.
















// Solution 1: Tailing the j in for loop
// Description: The difficult aspect of this problem is that you can't make an array to push onto. So we have to work with the existing array.
    // Steps:
        // 1. If the length of the given array is 0, then return 0
        // 2. Set the trailing variable, i, to 0. It will increment when the leading variable, j, is not the same numeric value
        // 3. Create for loop and leading variable, j, being one step ahead of the trailing variable, i
        // 4. If the numeric values at those indices are not the same, i will increment by 1.
        // 5. After increment, the NUMERIC VALUE at the index of i WILL BE REPLACED(or copied) that of the numeric value at index of j.
            // This way, the array we are working with will have no repeating numbers behind the trailing variable i
        // 6. We will have to add 1 to at the end of for loop to the trailing variable because it will be short one.

const removeDuplicates = nums => {

    if(nums.length === 0) return 0;

    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        if(nums[j] !== nums[i]){
            i++;
            nums[i] = nums[j]
        }
    }
    return i + 1
}