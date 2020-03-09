/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    let edge = 2147483647, num = 0, flag = false, positive = true, once = false;
    if (str.length < 1) {
        return 0
    }
    for (let i = 0; i < str.length; i++) {
        switch(str[i]) {
            case " ": {
                if (once) {
                    flag = true;
                }
                break;
            }
            case "+": {
                if (!once) {
                    positive = true;
                    once = true;
                } else {
                    flag = true;
                }
                break;
            }
            case "-": {
                if (!once) {
                    positive = false;
                    once = true;
                } else {
                    flag = true;
                }
                break;

            }
            case "0": {
                if (!once) {
                    positive = true;
                    once = true;
                }
                num = num*10
                if (positive) {
                    num += 0;
                } else {
                    num -= 0;
                }
                break;
            }
            case "1": {
                if (!once) {
                    positive = true;
                    once = true;
                }
                num = num*10
                if (positive) {
                    num += 1;
                } else {
                    num -= 1;
                }
                break;
            }
            case "2": {
                if (!once) {
                    positive = true;
                    once = true;
                }
                num = num*10
                if (positive) {
                    num += 2;
                } else {
                    num -= 2;
                }
                break;
            }
            case "3": {
                if (!once) {
                    positive = true;
                    once = true;
                }
                num = num*10
                if (positive) {
                    num += 3;
                } else {
                    num -= 3;
                }
                break;
            }
            case "4": {
                if (!once) {
                    positive = true;
                    once = true;
                }
                num = num*10
                if (positive) {
                    num += 4;
                } else {
                    num -= 4;
                }
                break;
            }
            case "5": {
                if (!once) {
                    positive = true;
                    once = true;
                }
                num = num*10
                if (positive) {
                    num += 5;
                } else {
                    num -= 5;
                }
                break;
            }
            case "6": {
                if (!once) {
                    positive = true;
                    once = true;
                }
                num = num*10
                if (positive) {
                    num += 6;
                } else {
                    num -= 6;
                }
                break;
            }
            case "7": {
                if (!once) {
                    positive = true;
                    once = true;
                }
                num = num*10
                if (positive) {
                    num += 7;
                } else {
                    num -= 7;
                }
                break;
            }
            case "8": {
                if (!once) {
                    positive = true;
                    once = true;
                }
                num = num*10
                if (positive) {
                    num += 8;
                } else {
                    num -= 8;
                }
                break;
            }
            case "9": {
                if (!once) {
                    positive = true;
                    once = true;
                }
                num = num*10
                if (positive) {
                    num += 9;
                } else {
                    num -= 9;
                }
                break;
            }
            default: {
                flag = true
            }
        }
        if (flag) {
            break;
        }
    }
    if (positive && num > edge) {
        num = edge;
    } else if (!positive && num < (0-edge-1)) {
        num = 0-edge-1;
    }
    return num;
};
// @lc code=end

