/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if (matrix.length == 0) return []
    let res = [], union = parseInt(matrix.length / 2 + 0.5), row = matrix.length, column = matrix[0].length
    let top = [], bottom = [], left = [], right = []
    union = parseInt((row > column ? column : row) / 2 + 0.5)
    for (let i = 0; i < union; i++) {
        top = []
        bottom = []
        left = []
        right = []
        if (column - 1 - i == i && row - 1 - i == i) {
            res.push(matrix[i][i])
            break
        }
        if (column - 1 - i == i && row - 1 - i > i) {
            for (let j = i; j <= row - 1 -i; j++) {
                res.push(matrix[j][column - i - 1])
            }
            break
        }
        if (row - 1 - i == i && column - 1 - i > i) {
            for (let j = i; j <= column - 1 - i; j++) {
                res.push(matrix[i][j])
            }
            break
        }
        for (let j = i; j < column - 1 - i; j++) {
            top.push(matrix[i][j])
            bottom.push(matrix[row - i - 1][column - j - 1])
        }
        for (let j = i; j < row - 1 - i; j++) {
            right.push(matrix[j][column - i - 1])
            left.push(matrix[row - 1 - j][i])
        }
        top = top.concat(right).concat(bottom).concat(left)
        top.forEach( e => res.push(e))
    }
    return res
};
// @lc code=end

