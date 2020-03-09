/*
 * @lc app=leetcode.cn id=10 lang=javascript
 *
 * [10] 正则表达式匹配
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    let dp = []
    s = "#" + s
    p = "#" + p
    for (let i = 0; i < p.length+1; i++) {
        dp.push(new Array(s.length+1))
    }
    dp[0][0] = true
    for (let i = 1; i < p.length+1; i++) {
        for (let j = 1; j < s.length+1; j++) {
            if (p[i-1] == s[j-1] || p[i-1] == ".") {
                dp[i][j] = dp[i-1][j-1]
            } else if (p[i-1] == "*") {
                if (s[j-1] != p[i-2] && p[i-2] != ".") {
                    dp[i][j] = dp[i-2][j]
                } else {
                    dp[i][j] = dp[i][j-1] || dp[i-2][j] || dp[i-1][j];
                }
            }
        }
    }
    if (dp[p.length][s.length]) {
        return true
    } else {
        return false
    }
};
// @lc code=end

