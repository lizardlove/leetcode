/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N皇后
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    let queens = {}, leftSlash = [], rightSlash = [], res = []

    trackback(0)

    function trackback(row) {
        if (row == n) {
            let ans = []
            for (let i in queens) {
                ans.push(Array.from({length: queens[i]}, x=>'.').toString().replace(/\,/g, '') + 'Q' + Array.from({length: n-1-queens[i]}, x=>'.').toString().replace(/\,/g, ''))
            }
            res.push(ans)
        }
        for (let i = 0; i < n; i++) {
            if (Object.values(queens).indexOf(i) != -1 || rightSlash.indexOf(row + i) != -1 || leftSlash.indexOf(row - i) != -1) {
                continue
            }
            queens[row] = i
            leftSlash.push(row - i)
            rightSlash.push(row + i)
            trackback(row + 1)
            queens[row] = -1
            leftSlash.pop()
            rightSlash.pop()
        }
    }
    return res
};

// @lc code=end

