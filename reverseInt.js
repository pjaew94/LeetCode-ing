// Given a 32-bit signed integer, reverse digits of an integer.

// Note:
// Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. 
// For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.


// Example 1:
    // Input: x = 123
    // Output: 321

// Example 2:
    // Input: x = -123
    // Output: -321

// Example 3:
    // Input: x = 120
    // Output: 21

// Example 4:
    // Input: x = 0
    // Output: 0











// Solution 1: Quickest Way
// Description:
    // 1. Takes param number and turns into string using toString()
    // 2. Uses split('') to split the numbers
    // 3. Reveres the array
    // 4. Joins the the array to turn into string again.
    // 5. Use parseInt() to convert string into array ** parseInt() parses the number values. Therefore, if there is a negative, it will omit it.
    // 6. Multiply the result by Math.sign(n) if there are any negatives.
    // 7. The if condition checks if the reversedInt is overflowing past 32-bit limits.
    // 8. If it's not, just return the reversedInt. If it is, return 0 as directed.
// Time Complexity: On


const reverseInt = (n) => {
    let reversedInt = parseInt(n.toString().split('').reverse().join('')) * Math.sign(n)

    return reversedInt < 2147483647 && reversedInt > -2147483647 ? reversedInt : 0
}
