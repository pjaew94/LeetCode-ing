// Given head, the head of a linked list, determine if the linked list has a cycle in it.

// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

// Return true if there is a cycle in the linked list. Otherwise, return false.

// Example 1:
// Input: head = [3,2,0,-4], pos = 1
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).

// Example 2:
// Input: head = [1,2], pos = 0
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.

// Example 3:
// Input: head = [1], pos = -1
// Output: false
// Explanation: There is no cycle in the linked list.













// Solution 1: Slow and fast pointer
// Description: Basically setting a slow pointer and fast pointer to move around the link. They will meet each other eventually if there is a cycle.
    // Steps:
        // 1. Set base case for if there is no head
        // 2. Create slow pointer and fast pointer. Fast pointer will move 2x faster than slow pointer in the while loop
        // 3. Create while loop as long as slow pointer is not at the same position as the fast pointer.
        // 4. If the fast pointer does not exist, then there can't be a cycle. If there is a cycle, there will always be a value.
        // 5. Increment the slow node by 1 and the fast node by 2 at the end of each cycle.
        // 6. Once they meet at one of the nodes, the while loop will stop as conditioned. and return true.
const hasCycle = head => {
    if(!head) return false;
    
    let slow=head;
    let fast=head.next;
    while(slow!=fast)
    {
     if(!fast || !fast.next)
       return false;
        
     slow=slow.next;
     fast=fast.next.next;
    }
    
    return true;
}

// Solution 2: Marking the visited nodes.
// Description: Marking each visited node. Once you revisit a visited node, then you know there is a cycle to return true.
    // Steps:
        // 1. Create while loop for each node present in the array.
        // 2. Set ending condition. If the node value is already marked as vistied, we know it's cycled so return true.
        // 3. If the node is not marked, mark it as visited. Then check if the next node exists just like the current one. If so, go to next. If not, return null.
        // 4. When the else statement returns null, the cycle stopped (or never existed) and the loop stops.
        // 5. Return false if the if statement inside of the loop is never satisfied.

const hasCycle = head => {
    let list = head;
  
    while (list) {
      if (list.val === 'visited') {
        return true;
      } else {
        list.val = 'visited';
        list = list.next ? list.next : null;
      }
    }
    
    return false;
}