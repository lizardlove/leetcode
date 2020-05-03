/*
 * @lc app=leetcode.cn id=29 lang=javascript
 *
 * [29] 两数相除
 */

// @lc code=start
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    let flag = true, result = 0
    if (Math.abs(dividend) < Math.abs(divisor) ) {
        return 0 
    }
    if ((Math.abs(dividend) > dividend && divisor > 0) || (Math.abs(divisor) > divisor && dividend > -1)) {
        flag = false
    }
    dividend = Math.abs(dividend)
    divisor = Math.abs(divisor)
    result = div(dividend, divisor)
    if (flag) {
        return result < (Math.pow(2,31) - 1) ? result : (Math.pow(2,31) - 1)
    } else {
        return 0 - result
    }

};

function div(dividend, divisor) {
    if (dividend < divisor) return 0
    let result = 1
    let remain = divisor
    while( (remain + remain) <= dividend ) {
        result = result + result
        remain = remain + remain
    }
    return result + div(dividend - remain, divisor)
}
// @lc code=end

