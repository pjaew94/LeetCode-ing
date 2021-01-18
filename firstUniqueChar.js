// Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.

// Examples:

// s = "leetcode"
// return 0.

// s = "loveleetcode"
// return 2.


// Solution 1: Storage and check
const firstUniqChar = s => {

    let map = {}


    for(let i = 0; i < s.length; i++) {
        if(map[s[i]] !== undefined ) map[s[i]]++;
        else map[s[i]] = 0;
    }

    for(let j = 0; j < s.length; j++) {
        if(map[s[j]] === 0) {
            return j
        }
    }

    return -1;
}

console.log(firstUniqChar('loveleetcode'))



