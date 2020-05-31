/*
 * @lc app=leetcode.cn id=91 lang=javascript
 *
 * [91] 解码方法
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    if (s[0] == '0') return 0
    s = "9" + s
    let dp = Array.from({length: s.length}, x=>0), num, prev
    dp[0] = 1
    dp[1] = 1
    for (let i = 2; i < s.length; i++) {
        num = parseInt(s[i])
        prev = parseInt(s[i-1])
        if (num == 0) {
            if (prev == 1 || prev == 2) {
                dp[i] = dp[i-2]
                continue
            } else {
                return 0
            }
        }
        if (prev == 1 || (prev == 2 && num < 7)) {
            dp[i] = dp[i-1] + 1
            if (dp[i-2]) {
                dp[i] = dp[i] + dp[i-2] - 1
            }
        } else {
            dp[i] = dp[i-1]
        }
    }
    return dp[s.length - 1]

};
// @lc code=end

