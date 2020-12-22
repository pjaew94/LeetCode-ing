// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:
    // Input: strs = ["flower","flow","flight"]
    // Output: "fl"

// Example 2:
    // Input: strs = ["dog","racecar","car"]
    // Output: ""
    // Explanation: There is no common prefix among the input strings.


// Constraints:
    // 0 <= strs.length <= 200
    // 0 <= strs[i].length <= 200
    // strs[i] consists of only lower-case English letters.




// Solution 1: Vertical comparison method
// Description: Takes the first letter of the first word in the array and compares it to the first letter of every word in the array, Then does the same for the second letter
    // Detailed:
        // 1. Create prefix varaible to return at the end
        // 2. First if statement is base condition to just return empty string as directed if the given array does not exist.
        // 3. Create for loop based on the length of the word in the first index of the array
        // 4. Create char variable to loop through all characters of the first word in the array
        // 5. Nested for loop to iterate through each word in the array and see if that respective spot of the string has the same letter. 
// Time complexity: It's about the same for space and time complexity compared to the horizontal method. But when it comes to worst case scenerio, Vertical method is a lot better because you only have to iterate through the first letter of each string.



const longestCommonPrefix = strs => {
    let prefix = ''
    if(strs === null || strs.length ===0) return prefix

    for(let i=0; i < strs[0].length; i++) {
        const char = strs[0][i]

        for(let j = 1; j < strs.length; j++) {
            if(strs[j][i] !== char) return prefix
        }

        prefix = prefix + char
    }

    return prefix
  
}