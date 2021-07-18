/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.replace(/[^0-9a-zA-Z]+/g, '').toLowerCase()
    if (s.length === 0) return true
    let leftIndex = 0, rightIndex = s.length - 1, flag = true
    while(leftIndex <= rightIndex && flag) {
        if (s[leftIndex] != s[rightIndex]) {
            flag = false
        }
        leftIndex++
        rightIndex--
    }
    return flag
};
// @lc code=end

