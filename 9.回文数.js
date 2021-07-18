/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    x = x.toString()
    let l = 0, r = x.length - 1, flag = true
    while(l < r && flag) {
        if (x[l++] == x[r--]) {
            flag = true
        } else {
            flag = false
        }
    }
    return flag
};
// @lc code=end

