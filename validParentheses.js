// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

// Example 1:
    // Input: s = "()"
    // Output: true

// Example 2:
    // Input: s = "()[]{}"
    // Output: true

// Example 3:
    // Input: s = "(]"
    // Output: false

// Example 4:
    // Input: s = "([)]"
    // Output: false

// Example 5:
    // Input: s = "{[]}"
    // Output: true

// Constraints:
    // 1 <= s.length <= 104
    // s consists of parentheses only '()[]{}'.







// Solution 1: Creating pairs
// Description: Using a map and pop() to check if the brackets are closing properly
    // Steps:
        // 1. Create a stack array to store opening brackets to match with map later.
        // 2. Create the map of the pairs of opening and closing brackets
        // 3. Create for loop based on length of the characters in the string
        // 4. If the current character is an opening bracket, store it into stack
        // 5. If the current character is a closing bracket, pop() the last value in stack (This will make stack an empty array if the result will end up 'true')
        // 6. If the last character of stack does not match the mapped value of it as the current character, the brackets are not closing properly. So return false.
        // 7. By the end, if the stack has element left, it means that there wasn't pairs that were matching, so return false.
        // 8. Else return true.


const isValid = str => {
    let stack = [];
    let map = {
        "(": ")",
        "{": "}",
        "[": "]"
    }


    for(let i = 0; i < str.length; i++) {
        if (str[i] === '(' || str[i] === '{' || str[i] === '[' ) {
            stack.push(str[i]);
        } else {
            let last = stack.pop();
            
            if (str[i] !== map[last]) {return false};
        }
    }

    if (stack.length !== 0) {return false};

    return true;
}





// Solution 2: Stack data structure
// Description: Using stack data structure to create two maps for comparison. Also uses pop() to shorten stack.
    // Steps:
        // 1. Create stack variable where opening brackets will be stored for comparison later.
        // 2. Create opening bracket pairs with closing brackets map and also create closing bracket map for checking later
        // 3. Create for loop to iterate through each character of the given string.
        // 4. Create char variable just for clarity.
        // 5. First if condition checks if the current character is an opening bracket. If it is, just push into stack array.
        // 6. The else statement checks to see if the current character is a closing bracket. 
        // 7. If the current char is a closing bracket, we want to pop the latest char in stack array and map it to see if the current closing bracket is the closing bracket for the popped char.
        // 8. If it isn't, just return false.
        // 9. At the end, if stack.length === 0, then it will return true. If it's not, it will return false.


const isParenthesisMatching = (str) => {
    let stack = [];

    let open = {
        '{': '}',
        '[': ']',
        '(': ')'
    };

    let closed = {
        '}': true,
        ']': true,
        ')': true
    }

    for (let i = 0; i < str.length; i++) {

        let char = str[i];

        if (open[char]) {
            stack.push(char);
        } else if (closed[char]) {
            if (open[stack.pop()] !== char) return false;
        }
    }
    return stack.length === 0;
}