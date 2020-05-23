/*
 * @lc app=leetcode.cn id=74 lang=javascript
 *
 * [74] 搜索二维矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if (!matrix.length) return false
    let left, right, middle, row = matrix.length, col = matrix[0].length, rowIndex = 0

    left = 0
    right = row - 1
    middle = parseInt((left + right) / 2)
    while(left <= right) {
        if (matrix[middle][0] == target) {
            return true
        } else if (matrix[middle][0] > target) {
            right = middle - 1
            middle = parseInt((left + right) / 2)
        } else {
            left = middle + 1
            middle = parseInt((left + right) / 2)
        }
    }
    rowIndex = left > right ? right : left
    rowIndex = rowIndex < 0 ? 0 : rowIndex
    
    left = 0
    right = col - 1
    middle = parseInt((left + right) / 2)
    while(left <= right) {
        if (matrix[rowIndex][middle] == target) {
            return true
        } else if (matrix[rowIndex][middle] > target) {
            right = middle - 1
            middle = parseInt((left + right) / 2)
        } else {
            left = middle + 1
            middle = parseInt((left + right) / 2)
        }
    }
    return false

}; 
// @lc code=end

