/*
 * @lc app=leetcode.cn id=120 lang=javascript
 *
 * [120] 三角形最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    if (triangle.length === 0) return null
    if (triangle.length === 1) return triangle[0][0]
    let minPath  = 99999, dp = triangle
    for (let i = 1; i < triangle.length; i++) {
        dp[i][0] = dp[i-1][0] + dp[i][0]
        for (let j = 1; j < triangle[i].length; j++) {
            if (j === triangle[i].length-1) {
                dp[i][j] = dp[i-1][j-1]+dp[i][j]
            } else {
                minPath = dp[i-1][j] > dp[i-1][j-1] ? dp[i-1][j-1] : dp[i-1][j]
                dp[i][j] = minPath + dp[i][j]
            }
        }
    }
    let lastLevel = triangle[triangle.length-1].sort((x,y)=>x-y)
    return lastLevel[0]

};
// @lc code=end

