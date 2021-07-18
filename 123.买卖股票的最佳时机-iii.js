/*
 * @lc app=leetcode.cn id=123 lang=javascript
 *
 * [123] 买卖股票的最佳时机 III
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let k = 2
    let dp = Array.from({length: k*2}, x => -prices[0])
    for (let i = 0; i < prices.length; i++) {
        for (let j = 0; j < dp.length; j++) {
            dp[j] = Math.max(dp[j], (dp[j - 1] || 0) + (j & 1 ? prices[i] : -prices[i]))
        }
        console.log(dp)
    }
    return Math.max(0, ...dp)
};
// @lc code=end

