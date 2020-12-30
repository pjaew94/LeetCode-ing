// Reverse bits of a given 32 bits unsigned integer.

// Note:
// Note that in some languages such as Java, there is no unsigned integer type. In this case, both input and output will be given as a signed integer type. They should not affect your implementation, as the integer's internal binary representation is the same, whether it is signed or unsigned.
// In Java, the compiler represents the signed integers using 2's complement notation. Therefore, in Example 2 above, the input represents the signed integer -3 and the output represents the signed integer -1073741825.
// Follow up:

// If this function is called many times, how would you optimize it?

 

// Example 1:
// Input: n = 00000010100101000001111010011100
// Output:    964176192 (00111001011110000010100101000000)
// Explanation: The input binary string 00000010100101000001111010011100 represents the unsigned integer 43261596, so return 964176192 which its binary representation is 00111001011110000010100101000000.

// Example 2:
// Input: n = 11111111111111111111111111111101
// Output:   3221225471 (10111111111111111111111111111111)
// Explanation: The input binary string 11111111111111111111111111111101 represents the unsigned integer 4294967293, so return 3221225471 which its binary representation is 10111111111111111111111111111111.
 

// Constraints:
// The input must be a binary string of length 32


// Solution 1: One Liner
// Description:
    // Steps:
        // 1. use toString(2) to convert the given number to string in binary.
        // 2. use padStart(32, '0') to ensure there is at least 32 characters. if not, put 0's in the start of it to make it 32 characters.
        // 3.split, reverse, then join to reverse it.
        // 4. Return parseInt(bits, 2) as the bits as binary
const reverseBits = n => {
    const bits = n.toString(2).padStart(32, '0').split('').reverse().join('');
    return parseInt(bits, 2);
}

console.log(reverseBits(00000010100101000001111010011100))

