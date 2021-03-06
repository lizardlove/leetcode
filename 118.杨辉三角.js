/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if (numRows === 0) return []
    if (numRows === 1) return [[1]]
    if (numRows === 2) return [[1],[1,1]]
    let res = [[1],[1,1]], level = []
    for (let i = 2; i < numRows; i++) {
        level = [1]
        for (let j = 0; j < i - 1; j++) {
            level.push(res[i-1][j]+res[i-1][j+1])
        }
        level.push(1)
        res.push(level)
    }
    return res
};
// @lc code=end

