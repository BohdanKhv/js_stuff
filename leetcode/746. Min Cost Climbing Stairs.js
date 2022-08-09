// Problem #: 746
// Title: Min Cost Climbing Stairs
// Difficulty: Easy
var minCostClimbingStairs = function(cost) {
    // Create an array of the costs
    let dp = [];
    // Add the first two costs to the array
    dp[0] = cost[0];
    dp[1] = cost[1];

    // Loop through the costs, starting at index 2
    for(let i = 2; i < cost.length; i++) {
        // Add the minimum of the current cost and the previous cost to the array
        dp[i] = Math.min(dp[i - 1], dp[i - 2]) + cost[i];
    }
    // Return the last value in the array
    return Math.min(dp[cost.length - 1], dp[cost.length - 2]);
}