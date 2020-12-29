// Say you have an array prices for which the ith element is the price of a given stock on day i.

// Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).

// Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).

// Example 1:
// Input: [7,1,5,3,6,4]
// Output: 7
// Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
//              Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.

// Example 2:
// Input: [1,2,3,4,5]
// Output: 4
// Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
//              Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are
//              engaging multiple transactions at the same time. You must sell before buying again.

// Example 3:
// Input: [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transaction is done, i.e. max profit = 0.

// Solution 1: One for loop
// Description:
    // Steps:
        // 1. Create variable for the index to be increment after each for loop. This will start at 0 for index 0 of the array.
        // 2. Create profit variable to be increment whenever the for loop calculates profits
        // 3. Create for loop starting at index of 1 of the array.
        // 4. If the price at the current index is smaller or equal to than the price the day before, then no profit can be made. So increment the buyPriceIndex by 1 and continue to next loop.
        // 5. If the current price is greater than the price from previous day, then profit can be made. So add the difference to the profit. Increment the buypriceindex and move on.
        // 6. Return profits
const maxProfit = prices => {
    let buyPriceIndex = 0;
    let profit = 0;

    for(let i = 1; i < prices.length; i++) {
        if(prices[buyPriceIndex] >= prices[i]) buyPriceIndex++
        if(prices[buyPriceIndex] < prices[i]){ 
            profit += prices[i] - prices[buyPriceIndex];
            buyPriceIndex++
        }
    }

    return profit;
}

console.log(maxProfit([3,3,5,0,0,3,1,4]))