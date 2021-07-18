/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let dp = Array.from({length:prices.length}, x=>0), res = 0
    for (let i = 1; i < prices.length; i++) {
        dp[i] = prices[i] - prices[i-1]
        if (dp[i] > 0 && dp[i-1] > 0) {
            dp[i] += dp[i-1]
            dp[i-1] = 0
        }
    }
    for (let i  = 0; i < dp.length; i++) {
        if (dp[i] > 0) {
            res += dp[i]
        }
    }
    return res
};
// @lc code=end

