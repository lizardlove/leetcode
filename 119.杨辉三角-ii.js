/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    if (rowIndex === 0) return [1]
    if (rowIndex === 1) return [1,1]
    let res = [1,1]
    for (let i = 2; i < rowIndex+1; i++) {
        res.push(1)
        for (let j = parseInt(i/2); j > 0; j--) {
            res[j] = res[j] + res[j-1]
        }
        for (let j = parseInt(i/2)+1; j< i; j++) {
            res[j] = res[i-j]
        }
    }
    return res
};
// @lc code=end

