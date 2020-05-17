/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    let row = grid.length, column = grid[0].length, top, left
    for (let i = 1; i < row; i++) {
        grid[i][0] += grid[i-1][0]
    }
    for (let i = 1; i < column; i++) {
        grid[0][i] += grid[0][i-1]
    }
    for (let i = 1; i < row; i++) {
        for (let j = 1; j < column; j++) {
            top = grid[i][j] + grid[i-1][j]
            left = grid[i][j] + grid[i][j-1]
            grid[i][j] = top > left ? left : top
        }
    }
    return grid[row-1][column-1]
};
// @lc code=end

