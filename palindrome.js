// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

// Note: For the purpose of this problem, we define empty string as valid palindrome.

// Example 1:
// Input: "A man, a plan, a canal: Panama"
// Output: true

// Example 2:
// Input: "race a car"
// Output: false























// Solution 1:
    // Description: Lowercase the string FIRST then replace all of the characters. Because the parameter in the replace() replaces every that is not lowercase alphabet with an empty string.
                    // Return the condition if the reversed is equal to the original.

const isPalindrome = s => {
    let stringOnly = s.toLowerCase().replace(/[^a-z\d]/g, '')



    if(s === '') return true;

    return stringOnly.split('').reverse().join('') === stringOnly
}