// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Example 1:
    // Input: n = 2
    // Output: 2
    // Explanation: There are two ways to climb to the top.
    // 1. 1 step + 1 step
    // 2. 2 steps

// Example 2:
    // Input: n = 3
    // Output: 3
    // Explanation: There are three ways to climb to the top.
    // 1. 1 step + 1 step + 1 step
    // 2. 1 step + 2 steps
    // 3. 2 steps + 1 step

// Constraints:
    // 1 <= n <= 45


// Solution 1: Fibonacci Sequence.
// Description: Fibonacci sequence is the sum of the two preceding ones, starting from 0 and 1. 0, 1, 1, 2, 3, 5, 8, 13, 21, ...
    // Steps:
        // 1. If you figure out the number of possibilities for 4 steps, its 5. Which is the addition of the number of possibilities for steps 3 and 2.
        // 2. We set base case for n === 1 or 0.
        // 3. We set variables first and second to start off the first two numbers of the Fibonacci sequence.
        // 4. For every loop starting at i = 3, we're essentially climbing up the Fibonacci sequence one up at a time.
        // 5. At the end of each loop, the variable 'second' will always be equal to 'third'. So we can return 'second' as the final answer.

n = 6

i = 3 | third = 3, first = 2, second = 3;
i = 4 | third = 5, first = 3, second = 5;
i = 5 | third = 8, first = 5, second = 8;
const climbStairs = n => {
    if(n === 1 || n === 0) return 1

    let first = 1;
    let second = 2;

    for(let i = 3; i <= n; i++) {
        let third = first + second;
        first = second;
        second = third;
    }

    return second
} 