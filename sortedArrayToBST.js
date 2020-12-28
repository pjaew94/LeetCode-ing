// Convert Sorted Array to Binary Search Tree

// Given an array where elements are sorted in ascending order, convert it to a height balanced BST.

// For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

// Example:
// Given the sorted array: [-10,-3,0,5,9],

// One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:

//       0
//      / \
//    -3   9
//    /   /
//  -10  5











// Solution 1: Recursive Method.
// Description: Finds the midpoint of the given array and uses recursion to loop through left and right subarrays of the given array to make binary tree
    // Steps:
        // 1. First we will make the function we will be using for recursion.
        // 2. We will pass the given array, the index of the beginning of the array and the end.
        // 3. If the start is bigger than end, it means left or right subtrees are not possible. So return null.
        // 4. Find the mid point of the array or subarray.
        // 5. Create the new node with the new mid point.
        // 6. Call the function again with the left and right subarrays.
        // 7. return the node you made with the midpoint.
        // 8. Note that every node returned will be the "midpoint" node. It will keep going down into subarrays until there can't be any more left or right subarrays.
        // NOTE: Notice how we don't have to pass the array as an answer. THere are functions within the given problem in leetcode that allows us to
        // pass constructed BSTs along with the 'TreeNode' function that allows us to make a node.
const sortedArrayToBST = nums => {
    return traverse(nums, 0, nums.length - 1);

    function traverse(nums, start, end) {
        if(start > end) {
            return null;
        }

        let mid = Math.floor((start + end)/2)
        let root = new TreeNode(nums[mid]);
        root.left = traverse(nums, start, mid - 1);
        root.right = traverse(nums, mid + 1, end);
        return root;
    }
}
