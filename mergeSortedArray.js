// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

// Note:
// The number of elements initialized in nums1 and nums2 are m and n respectively.
// You may assume that nums1 has enough space (size that is equal to m + n) to hold additional elements from nums2.

// Example:
    // Input:
    // nums1 = [1,2,3,0,0,0], m = 3
    // nums2 = [2,5,6],       n = 3

    // Output: [1,2,2,3,5,6]

// Constraints:
    // -10^9 <= nums1[i], nums2[i] <= 10^9
    // nums1.length == m + n
    // nums2.length == n


// Solution 1: Using Concat, Sort, Filter
// Description: Concat the two arrays, then sort them by ascending order, then filter out all of the zeros.
// Note: Not accepted on leetcode because of concat()

const merge = (nums1, m, nums2, n) => {
    return nums1.concat(nums2).sort((a, b) => a - b).filter(num => num !== 0)
}


// Solution 2: For loop to replace nums1 values
// Description: Use for loop at the end of the non-zeros in nums1 array with the nums2 values.
// Accepted on leetcode, but time complexity is bad.
const merge = (nums1, m, nums2, n) => {
    
    let counter = 0
    for(let i = m; i < nums1.length; i++) {
        nums1[i] = nums2[counter];

        counter++
    }
    return nums1.sort((a, b) => a - b)
}

