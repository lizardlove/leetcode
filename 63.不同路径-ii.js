/*
 * @lc app=leetcode.cn id=63 lang=javascript
 *
 * [63] 不同路径 II
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    if (obstacleGrid[0][0] == 1) return 0
    let row = obstacleGrid.length, column = obstacleGrid[0].length
    let dp = Array.from({length: row}, x => Array.from({length: column}, y=>0))
    for (let i = 0; i < row; i++) {
        if (obstacleGrid[i][0] == 1) {
            break
        } else {
            dp[i][0] = 1
        }
    }
    for (let i = 0; i < column; i++) {
        if (obstacleGrid[0][i] == 1) {
            break
        } else {
            dp[0][i] = 1
        }
    }
    for (let i = 1; i < row; i++) {
        for (let j = 1; j < column; j++) {
            if (obstacleGrid[i][j] == 1) {
                dp[i][j] = 0
                continue
            }
            dp[i][j] = dp[i-1][j] + dp[i][j-1]
        }
    }
    return dp[row-1][column-1]
};
// @lc code=end

