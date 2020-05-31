/*
 * @lc app=leetcode.cn id=87 lang=javascript
 *
 * [87] 扰乱字符串
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isScramble = function(s1, s2) {
    if (s1.length != s2.length) return false
    let len = s1.length
    let dp = Array.from({length: len}, x => Array.from({length: len}, y => Array.from({length: len+1}, z => false)))
    
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (s1[i] == s2[j]) {
                dp[i][j][1] = true
            }
        }
    }

    for (let n = 2; n <= len; n++) {
        for (let i = 0; i <= len - n; i++) {
            for (let j = 0; j <= len - n; j++) {
                for (let k = 1; k < n; k++) {
                    if (dp[i][j][k] && dp[i+k][j+k][n-k]) {
                        dp[i][j][n] = true
                        break
                    }
                    if (dp[i][j+n-k][k] && dp[i+k][j][n-k]) {
                        dp[i][j][n] = true
                        break
                    }
                }
            }
        }
    }

    return dp[0][0][len]
};
// @lc code=end

