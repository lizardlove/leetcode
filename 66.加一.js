/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let up = false, index = digits.length - 1
    do {
        if (digits[index] == 9) {
            up = true
            digits[index] = 0
        } else {
            digits[index]++
            up = false
        }
        index--
    } while(up && index >= 0)
    if (up) {
        digits.unshift(1)
    }
    return digits

};
// @lc code=end

