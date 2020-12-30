// Say you have an array for which the ith element is the price of a given stock on day i.

// If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

// Note that you cannot sell a stock before you buy one.

// Example 1:
// Input: [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
//              Not 7-1 = 6, as selling price needs to be larger than buying price.


// Example 2:
    // Input: [7,6,4,3,1]
    // Output: 0
    // Explanation: In this case, no transaction is done, i.e. max profit = 0.
















// Solution 1: One for loop
// Description:
    // Steps:
        // 1. Create starting point for the maxProfit and the buyPrice to the 0th index of the array.
        // 2. Begin for loop starting at 1st index of the array.
        // 3. For every loop check if the current index is a smaller buy price than the previous
        // 4. For every loop after determining the smaller buy price, check if the current price minus the smallest buy price results in higher profit, or the previous maxProfit
        // 5. This is important because it moves up the array, since they said you have to be able to buy before you sell respective to the date.
        // 6. Return the max profit at end

const maxProfit = prices => {
    let maxProfit = 0;
    let buyPrice = prices[0];

    for(let i=1;i<prices.length;i++){
        buyPrice = Math.min(prices[i], buyPrice)
        maxProfit = Math.max(prices[i] - buyPrice, maxProfit)
    }
    return maxProfit 
}

console.log(maxProfit([7,6,4,3,1]))