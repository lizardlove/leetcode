/*
 * @lc app=leetcode.cn id=12 lang=javascript
 *
 * [12] 整数转罗马数字
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let str = ""
    let four, three, two, one
    four = parseInt(num / 1000)
    num = num % 1000
    three = parseInt(num/ 100)
    num = num % 100
    two = parseInt(num / 10)
    num = num % 10
    one = parseInt(num / 1)
    for (let i = 0; i < four; i++) {
        str += "M"
    }
    if (three <= 3) {
        for(let i = 0; i < three; i++) {
            str += "C"
        }
    } else if (three == 4) {
        str += "CD"
    } else if (three == 5) {
        str += "D"
    } else if (three <= 8) {
        str+="D"
        for(let i = 5; i < three; i++) {
            str+="C"
        }
    } else {
        str+="CM"
    }
    if (two <= 3) {
        for(let i = 0; i < two; i++) {
            str += "X"
        }
    } else if (two == 4) {
        str += "XL"
    } else if (two == 5) {
        str += "L"
    } else if (two <= 8) {
        str+="L"
        for(let i = 5; i < two; i++) {
            str+="X"
        }
    } else {
        str+="XC"
    }
    if (one <= 3) {
        for(let i = 0; i < one; i++) {
            str += "I"
        }
    } else if (one == 4) {
        str += "IV"
    } else if (one == 5) {
        str += "V"
    } else if (one <= 8) {
        str+="V"
        for(let i = 5; i < one; i++) {
            str+="I"
        }
    } else {
        str+="IX"
    }
    return str
};
// @lc code=end

