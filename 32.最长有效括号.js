/*
 * @lc app=leetcode.cn id=32 lang=javascript
 *
 * [32] 最长有效括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    let dp = Array.from({length:s.length}, x=>0), symbol
    for (let i = 1; i < s.length; i++) {
        if (s[i] == ')') {
            if (s[i-1] == '(') {
                if (dp[i-2]) {
                    dp[i] = dp[i-2] +2
                } else {
                    dp[i] = 2
                }
            } else if (s[i-1] == ')') {
                if (s[i-dp[i-1]-1] == '(') {
                    dp[i] = dp[i-1] + 2
                    if (dp[i-dp[i-1]-2]) {
                        dp[i] = dp[i] + dp[i-dp[i-1]-2]
                    }
                }
            }
        } 
    }
    let ans = 0
    dp.forEach(x => {
        if (x > ans) {
            ans = x
        }
    })
    return ans

};
// @lc code=end

