// Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

// For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

//  1
// / \
// 2   2
// / \ / \
// 3  4 4  3

// But the following [1,2,2,null,3,null,3] is not:
// 1
// / \
// 2   2
// \   \
// 3    3

// Follow up: Solve it both recursively and iteratively.


// Solution 1: Recursive Approach
// Description: Uses recursion to determine if the nodes exists or not and also to check the node values.
    // Steps:
        // 1. We call helper function, isMirror, and pass the tree twice.
        // 2. We create edge case scenarios where if the nodes do not exists (null), then return true.
        // 3. If only one of the nodes do not exist and the other does, that means the tree is no symmetrical, so return false.
        // 4. First statement on the return in the helper function validates the values at the node space.
        // 5. Second statement checks this for left child of the root with the right child of the root.
        // 6. Third statement checks the right child of left child of root with the left child of the child of root.
        // 7. It keeps going down the tree in respective pattern until all of the statements become true.
        // 8. If at any point one node exists and the other side doesnt, the edge case will stop it and return false
        // 9. If at any point the node VALUE does not exist the node VALUE at the respective side, then it will return false.

const isSymmetric = root => {
    return isMirror(root, root);
    
    function isMirror(node1, node2) {
        // edge case
        if (node1 == null && node2 == null) return true;
        if (node1 == null || node2 == null) return false;
        
        return node1.val == node2.val && isMirror(node1.left, node2.right) && isMirror(node1.right, node2.left);
    }
}


// Solution 2: Iterative Approach
// Description: Uses iterative approach with a memory to check node existence and values respectively.
    // Steps:
        // 1. Create an array to push our nodes into for checking
        // 2. Begin by pushing the roots into the queue.
        // 3. The while loop will run until the queue is empty, which means there are no more nodes to check.
        // 4. node1 and node2 will be popped out of the beginning of the queue array.
        // 5. If both values are null (which means both nodes do not exist at those locations), then keep going.
        // 6. If only one of the node spaces exist and the other doesn't, it means the nodes are not symmetrical, return false.
        // 7. If the nodes exists in both respective locations, but the values do not exist, then return false.
        // 8. Push the left child of the left branch paired with the right child of the right branch to compare. (Remember that the beginning of the while loop shifts the first two values of the array to compare)
        // 9. Push the right child of the left branch paired with the left child of the right branch to compare. (This will stay in queue until all of the outer children of the branches are finished comparing)
        // 10. Repeat until the queue.length === 0 or It meets one of the stopping conditions.

const isSymmetric = root => {
    const queue = [];

    queue.push(root, root);

    while (queue.length > 0) {
        const node1 = queue.shift();
        const node2 = queue.shift();

        if (node1 === null && node2 === null) continue;
        if (node1 === null || node2 === null) return false;
        if (node1.val !== node2.val) return false;
        
        queue.push(node1.left, node2.right);            
        queue.push(node1.right, node2.left);
    }
}


