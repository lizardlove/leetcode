/*
 * @lc app=leetcode.cn id=73 lang=javascript
 *
 * [73] 矩阵置零
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let rowIndex = [], columnIndex = [], row = matrix.length; column = matrix[0].length
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < column; j++) {
            if (matrix[i][j] == 0) {
                rowIndex.push(i)
                columnIndex.push(j)
            }
        }
    }
    for (let i = 0; i < column; i++) {
        for (let j = 0; j < rowIndex.length;j++) {
            matrix[rowIndex[j]][i] = 0
        }
    }
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < columnIndex.length; j++) {
            matrix[i][columnIndex[j]] = 0
        }
    }
};
// @lc code=end

