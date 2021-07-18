/*
 * @lc app=leetcode.cn id=85 lang=javascript
 *
 * [85] 最大矩形
 */

// @lc code=start
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    if (!matrix.length) return 0
    if (!matrix[0].length) return 0
    let res = 0, row = matrix.length, col = matrix[0].length
    let dp = Array.from({length: row}, x => Array.from({length: col + 2}, y=>0))
    let stack, area, height

    for (let i = 0; i < col; i++) {
        for (let j = 0; j < row; j++) {
            if (matrix[j][i] == '1') {
                dp[j][i+1] = j > 0 ?  dp[j-1][i+1] + 1 : 1
            }
        }
    }
    for (let i = 0; i < row; i++) {
        stack = [0]
        for (let j = 1; j < col + 2; j++) {
            while(dp[i][j] < dp[i][stack[stack.length - 1]]) {
                height = stack.pop()
                console.log(i, j, stack)
                area = dp[i][height] * (j - stack[stack.length - 1] - 1)
                res = res > area ? res : area
            }
            stack.push(j)
        }

    }
    return res
};
// @lc code=end

