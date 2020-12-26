// Given a non-empty array of decimal digits representing a non-negative integer, increment one to the integer.

// The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.

// You may assume the integer does not contain any leading zero, except the number 0 itself.

// Example 1:
// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.

// Example 1:
// Input: digits = [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.

// Example 1:
// Input: digits = [0]
// Output: [1]


















// Solution 1: Using carry
// Description: We're setting up a carry variable so it carries the value 1 if the sum of 1 creates a 10, which won't be a decimal digit.
    // Steps:
        // 1. Create carry variable.
        // 2. Create for loop to start the process at the end of the array (because we have to add the 1 to the final digit in the array).
        // 3. We check if the digit at the end of the array become 10 when it's added by 1. If it is, the carry becomes 1 (which we will use to add to the 2nd to last digit next).
        // 4. If the last digit added by 1 does not equal 10, then we simply replace the last digit by the sum of 1 (if it was 5, it becomes 6). We end the loop and return the array back.
        // 5. If the last digit becomes 10, we replace that index with value of 0. then we move on to the second to last index of the array.
        // 6. We repeat. If the second to last digit added by 1 becomes 10, we repeat. If not, we just replace the second to last index value added by 1. Then we break from loop and return array.
// Time Complexity: O(n)
// Space Complexity: O(1)
const plusOne = (digits) => {

    let carry = 0;

    for(let i = digits.length - 1; i >= 0; i--) {
        carry = digits[i] + 1 === 10 ? 1: 0;
        if(carry === 0) {
            digits[i] = digits[i] + 1;
            break;
        } else {
            digits[i] = 0;
        }
    }

    if (carry === 1) {
        digits.unshift(1);
    }

    return digits;

};

console.log(plusOne([0, 1, 0, 2, 9]));
 