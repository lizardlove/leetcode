/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows == 1) {
        return s
    }
    let n, str=[], res = "";
    for(let i = 0; i < numRows; i++) {
        str[i] = "";
    }
    n = parseInt(s.length / (2*numRows-2));
    for(let i = 0; i < n; i++) {
        for (let j = 0; j < numRows; j++) {
            str[j] += s[(2*numRows - 2)*i + j]
            if (j != 0 && j != numRows - 1){
                str[j] += s[(2*numRows - 2)*i + (2*numRows - 2 - j)]
            }
        }
    }
    let j = 0, flag = false;
    for(let i = (2*numRows - 2)*n; i < s.length; i++) {
        str[j] += s[i];
        if (!flag) {
            j++
        } else {
            j--;
        }
        if (j == numRows - 1) {
            flag = true;
        }
    }

    for (let i = 0; i < numRows; i++) {
        res += str[i];
    }
    return res;
};

// @lc code=end

