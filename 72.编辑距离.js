/*
 * @lc app=leetcode.cn id=72 lang=javascript
 *
 * [72] 编辑距离
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    if (word2.length == 0 || word1.length == 0) return word1.length + word2.length
    word1 = "#" + word1
    word2 = "#" + word2
    let len1 = word1.length, len2 = word2.length, min = 0
    let dp = Array.from({length: len1}, x=>Array.from({length:len2}, y=>0))
    for (let i = 0; i < len1; i++) {
        dp[i][0] = i
    }
    for (let i = 0; i < len2; i++) {
        dp[0][i] = i
    }
    for (let i = 1; i < len1; i++) {
        for (let j = 1; j < len2; j++){
            if (word1[i] == word2[j]) {
                min = dp[i][j-1]
                min = min > dp[i-1][j] ? dp[i-1][j] : min
                min = min > dp[i-1][j-1]-1 ? dp[i-1][j-1]-1:min
                dp[i][j] = min + 1
            } else {
                min = dp[i][j-1]
                min = min > dp[i-1][j] ? dp[i-1][j] : min
                min = min > dp[i-1][j-1] ? dp[i-1][j-1]:min
                dp[i][j] = min + 1
            }
        }
    }
    return dp[len1-1][len2-1]

};
// @lc code=end

