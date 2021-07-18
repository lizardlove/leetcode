/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices.length === 0||prices.length ===1) return 0
    let dp = Array.from({length: prices.length},x=>0)
    for (let i = 1; i < prices.length; i++) {
        dp[i] = prices[i] - prices[i-1]
        if (dp[i-1] > 0 && dp[i] + dp[i-1] > 0) {
            dp[i] = dp[i] + dp[i-1]
        }
    }
    dp.sort((x,y) => x-y)
    return dp[prices.length-1]
};
// @lc code=end

