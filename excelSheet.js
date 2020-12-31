// Given a column title as appear in an Excel sheet, return its corresponding column number.

// For example:
//     A -> 1
//     B -> 2
//     C -> 3
//     ...
//     Z -> 26
//     AA -> 27
//     AB -> 28 
//     ...

// Example 1:
// Input: "A"
// Output: 1

// Example 2:
// Input: "AB"
// Output: 28

// Example 3:
// Input: "ZY"
// Output: 701
 

// Constraints:
// 1 <= s.length <= 7
// s consists only of uppercase English letters.
// s is between "A" and "FXSHRXW".










// Solution 1: Power
// Description: Notice that in order for ZY to be 701. It's the first Y value (25) plus 26^2. Meaning in order for us to get to Z_,
//              We need to run through the alphabet (26 length) 26 times.
//              If it were to be YZ, it would be 26 + (26*25). Meaning we would have to go through the alphabet 25 times to hit Y_
    //  Steps:
        // 1. Create map for the alphabet and their numeric values.
        // 2. Create power value we will use to take the power of 26 depending on where the alphabet is located.
        // 3. For loop will start at the last alphabet(because the alphabet to the left is greater in value).
        // 4. THe number variable we will return at the end will be added on by the 26^power * the numeric value of the letter from the map.
        // 5. Increment power by 1 everytime you move left of the given string.
        // 6. Return number as answer.

const titleToNumber = s => {
    const map = {
        "A": 1,
        "B": 2,
        "C": 3,
        "D": 4,
        "E": 5,
        "F": 6,
        "G": 7,
        "H": 8,
        "I": 9,
        "J": 10,
        "K": 11,
        "L": 12,
        "M": 13,
        "N": 14,
        "O": 15,
        "P": 16,
        "Q": 17,
        "R": 18,
        "S": 19,
        "T": 20,
        "U": 21,
        "V": 22,
        "W": 23,
        "X": 24,
        "Y": 25,
        "Z": 26,
    }
    let number = 0;
    let power = 0;
    for(let i = s.length-1; i >= 0; i--) {
        number += Math.pow(26, power)*map[s[i]]
        power ++;
    }

    return number;
}