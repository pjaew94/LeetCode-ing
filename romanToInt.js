// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.

// Example 1:
// Input: s = "III"
// Output: 3

// Example 2:
// Input: s = "IV"
// Output: 4

// Example 3:
// Input: s = "IX"
// Output: 9

// Example 4:
// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.

// Example 5:
// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

// Constraints:
// 1 <= s.length <= 15
// s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
// It is guaranteed that s is a valid roman numeral in the range [1, 3999].





// Solution 1: Only solution
// Description:
// 1. Create a matcher object so we can assign numeric value for the roman numeral letters.
// 2. Take the string param and convert into array, splitting each letter into its own index.
// 3. 'total' variable created to increment or decrement based on conditions inside for loop
// 4. Inside the for loop, we get the numeric value of the current iteration and the next iteration
// 5. We compare the current to the next: If the current is less than the next, then we subtract the CURRENT numeric value from the total
// This will take care of the IV XL etc.
// 6. If the current value is NOT less than the next value, it will simply add to the total.
// This will take care of the edge iteration, where there is no next. We don't have to check for undefined because
// it won't meet the initial if statement

const romanToInt = (s) => {
  const matcher = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let arrRomans = s.split("");
  let total = 0;
  let current;
  let currentValue;
  let next;
  let nextValue;

  for (var i = 0; i < arrRomans.length; i++) {
    current = arrRomans[i];
    currentValue = matcher[current];

    next = arrRomans[i + 1];
    nextValue = matcher[next];

    if (currentValue < nextValue) {
      total -= currentValue;
    } else {
      total += currentValue;
    }
  }

  return total;
};
