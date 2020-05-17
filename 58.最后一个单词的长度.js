/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s = s.replace(/( )+/g, ' ')
    if (s == ' ') return 0
    let count = 0, flag = false
    for (let i = s.length - 1; i >= 0; i-- ) {
        if (s[i] == ' ') {
            if (flag) {
                break
            } else {
                continue
            }
        }
        else {
            flag = true
            count++
        }
    }
    return count
};
// @lc code=end

