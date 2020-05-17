/*
 * @lc app=leetcode.cn id=52 lang=javascript
 *
 * [52] N皇后 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
    let queens = {}, res = 0, leftSlash = [], righthSlash = []
    trackBack(0)
    function trackBack(row) {
        if (row == n) {
            res++
        }
        for (let i = 0; i < n; i++) {
            if (Object.values(queens).indexOf(i) != -1 || leftSlash.indexOf(row - i) != -1 || righthSlash.indexOf(row + i) != -1) {
                continue
            }
            queens[row] = i
            leftSlash.push(row - i)
            righthSlash.push(row + i)
            trackBack(row + 1)
            queens[row] = -1
            leftSlash.pop()
            righthSlash.pop()
        }

    }
    return res
};
// @lc code=end

