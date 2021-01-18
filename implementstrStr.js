// Implement strStr().
// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Clarification:
// What should we return when needle is an empty string? This is a great question to ask during an interview.
// For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

// Example 1:
// Input: haystack = "hello", needle = "ll"
// Output: 2

// Example 2:
// Input: haystack = "aaaaa", needle = "bba"
// Output: -1

// Example 3:
// Input: haystack = "", needle = ""
// Output: 0
 

// Constraints:
// 0 <= haystack.length, needle.length <= 5 * 104
// haystack and needle consist of only lower-case English characters.


// Solution 1: Substring method.
// Description: Uses substr() method to find the needle inthe haystack.
//      Steps:
//          1. Return 0 if the needle is an empty string as directed.
//          2. Create for loop to iterate for the length of the haystack minus the length of n.
//              (This is because there is no need to iterate through the end letters if the length is smaller than the needle length
//               since it will never equal the needle from that point on)
//          3. Use substr() method to check if the characters between the h[i] and h[i+n.length] is equal to the needle 
//          4. If it is equal, then return the i (which is the index of where the needle string starts on the haystack). 
//          5. If needle cannot be found, return -1 as directed. 
const strStr = (h, n) => {
    if (n.length == 0) return 0;
        
    for (let i = 0; i < h.length; i++) {
        
        if (h.substr(i, n.length) === n) {
            
            return i;
            
        }
        
    }
    
    return -1;
}
