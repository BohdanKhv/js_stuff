// Problem #: 121
// Title: Best Time to Buy and Sell Stock
// Difficulty: Easy
var maxProfit = function(prices) {
    let buy = prices[0];
    let sum = 0;
    
    for( let i = 1; i < prices.length; i++ ) {
        buy = Math.min(buy, prices[i]);
        sum = Math.max(sum, prices[i] - buy);
    }
    
    return sum;
};