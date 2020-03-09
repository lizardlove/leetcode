/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length == 0) {
        return ""
    } else if (strs.length == 1) {
        return strs[0]
    }
    let len = strs[0].length > strs[1].length ? strs[1].length : strs[0].length
    for (let i = 2; i < strs.length; i++) {
        len = len > strs[i].length ? strs[i].length : len
    }
    let i = 0
    for (i = 0; i < len; i++) {
        let word = strs[0][i], judge = true
        for (let j = 0; j < strs.length; j++) {
            if (strs[j][i] != word) {
                judge = false
                break
            }
        }
        if (!judge) {
            break
        }
    }
    if (i == 0) {
        return ""
    } else {
        return strs[0].substring(0, i)
    }

};
// @lc code=end

