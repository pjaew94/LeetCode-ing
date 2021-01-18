// Merge two sorted linked lists and return it as a new sorted list. 
// The new list should be made by splicing together the nodes of the first two lists.

// Example 1:
    // Input: l1 = [1,2,4], l2 = [1,3,4]
    // Output: [1,1,2,3,4,4]

// Example 2:
    // Input: l1 = [], l2 = []
    // Output: []

// Example 3:
    // Input: l1 = [], l2 = [0]
    // Output: [0]













// Solution 1: Using concat and sort
// Description: Concat to join the two arrays together then using sort() function to sort by ascending order
const mergeTwoSortedLists = (l1, l2) => { 
    if(l1.length === 0 && l2.length === 0) return []

    const concatArray = l1.concat(l2)

    return concatArray.sort((a, b) => a - b)

}


console.log(mergeTwoSortedLists([1,2,4], [1,3,4]))

