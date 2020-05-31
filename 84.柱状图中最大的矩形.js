/*
 * @lc app=leetcode.cn id=84 lang=javascript
 *
 * [84] 柱状图中最大的矩形
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    let res = 0, dp = Array.from({length: heights.length}, x=>0),temp
    dp[0] = heights[0]
    for (let i = 0; i < heights.length; i++) {
        for (let j = i; j < heights.length; j++) {
            if (i == j) {
                dp[i] = heights[i]
                res = res > heights[i] ? res : heights[i]
                continue
            }
            if (i > 0) {
                if (heights[i-1] == dp[j]) {
                    dp[j] = heights[j] > dp[j-1] ? dp[j-1]:heights[j]
                }
            } else {
                dp[j] = heights[j] > dp[j-1] ? dp[j-1]:heights[j]
            }
            temp = dp[j] * (j - i + 1)
            res = res > temp ? res : temp
        }
    }
    return res
};
// @lc code=end

