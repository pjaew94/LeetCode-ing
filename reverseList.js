// Reverse a singly linked list.

// Example:

// Input: 1->2->3->4->5->NULL
// Output: 5->4->3->2->1->NULL

// Solution 1: Recursive Solution
const reverseList = head => {
        if (head == null || head.next == null){
            return head;
        }

        let reversedListHead = reverseList(head.next)

        head.next.next = head;      
        head.next = null;

        return reversedListHead
}


// Solution 2: Iterative Solution
// Description: Uses iterative solution. Moving down the line with 3 pointers.
//      Steps:
//          1. Create variables for prev, curr, next pointers for the while loop. curr will be the current head.
//          2. While the curr value is null we will loop.
//          3. The 'next' will become the node right of the current head
//          4. The next value to the current will now POINT to null (which is left of the current head);
//          5. the prev pointer will move one to the right to what was the head
//          6. the curr head will move one to the right which is also the 'next' pointer.
//          7. In the next loop, the next pointer moves down to the right, and the process repeats
//          8. When the 'curr' pointer hits null, that means the prev pointer will be on the new head (reversed).
//          9. We return the prev pointer, which is returning the new reversed list pointing in the other direction.
const reverseList = head => {
    let prev = null;
    let curr = head;
    let next = null;

    while(curr !== null) {
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    return prev;
}