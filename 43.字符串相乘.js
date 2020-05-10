/*
 * @lc app=leetcode.cn id=43 lang=javascript
 *
 * [43] 字符串相乘
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    if (num1 == "0" || num2 == "0") return "0"
    let singleRes = "", res = ""
    for (let i = num2.length - 1; i >=0; i--) {
        singleRes = singleMul(num1, num2[i]) + Array.from({length: num2.length - 1 - i}, x=>'0').toString().replace(/,/g,"")
        console.log(singleRes)
        res = stringAdd(singleRes, res)
    }
    return res
};
function singleMul(num, single) {
    let mul, up = 0, res = ""
    single = single - '0'
    for (let i = num.length - 1; i >= 0; i--) {
        mul = (num[i] - '0')*single + up
        up = parseInt(mul / 10)
        res = (mul % 10) + res
    } 
    if (up) {
        res = up + res
    }
    return res
}
function stringAdd(num1, num2) {
    if (!num1.length) return num2
    if (!num2.length) return num1
    let up = 0, res = "", len1 = num1.length - 1, len2 = num2.length - 1, len, add, x, y
    len = len1 > len2 ? len1 : len2
    for (let i = 0; i < len + 1; i++) {
        x = len1 >= 0 ? num1[len1--] - '0' : 0
        y = len2 >= 0 ? num2[len2--] - '0' : 0
        add = x + y + up
        up = parseInt(add / 10)
        res = (add % 10) + res
    }

    if (up) {
        res = up + res
    }
    return res
}
// @lc code=end

