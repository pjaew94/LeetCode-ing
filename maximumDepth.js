// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: 3

// Example 2:
// Input: root = [1,null,2]
// Output: 2

// Example 3:
// Input: root = []
// Output: 0

// Example 4:
// Input: root = [0]
// Output: 1

// Constraints:
// The number of nodes in the tree is in the range [0, 104].
// -100 <= Node.val <= 100











// Solution 1: Recursive Approach;
// Description: Uses helper function to find the maxiumum depth by using Math.max() of the node left and right of each node.
    // Steps:
        // 1. Create base case: When the route of the branch reaches the end, it will return the max value as the final value for that branch route.
        // 2. We create recursion until each route hits the end point.
        // 3. Math.max() will bubble up the max values for each route. In the end, it will return the route with the highest 'max' value.
        // 4. Note that the max value gets incremented BEFORE it checks if the node exists. Therefore, you would not be short 1 value for the max count.
const maxDepth = (root, max = 0) => {
    if(root === null) return max
    return Math.max(maxDepth(root.left, max + 1), maxDepth(root.right, max + 1));
};
