// Given a singly linked list, determine if it is a palindrome.

// Example 1:

// Input: 1->2
// Output: false
// Example 2:

// Input: 1->2->2->1
// Output: true

const isPalindrome = head => {
    let prev = null;
    let curr = head;
    let next = null;

    while(curr !== null) {
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    if(prev === head) return true;
    else return false;
}

console.log(isPalindrome([0,0]))