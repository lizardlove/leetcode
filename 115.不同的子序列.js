/*
 * @lc app=leetcode.cn id=115 lang=javascript
 *
 * [115] 不同的子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
    s = '#'+s
    t = '#'+t
    let dp = Array.from({length: t.length}, x => Array.from({length: s.length}, y => 0))
    for (let i = 0; i < s.length; i++) {
        dp[0][i] = 1
    }
    for (let i = 1; i < t.length; i++) {
        for (let j = i; j < s.length; j ++) {
            if (s[j] === t[i]) {
                dp[i][j] = dp[i][j-1] + dp[i-1][j-1]
            } else {
                dp[i][j] = dp[i][j-1]
            }
        }
    }
    return dp[t.length - 1][s.length - 1]
};
// @lc code=end

