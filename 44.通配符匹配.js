/*
 * @lc app=leetcode.cn id=44 lang=javascript
 *
 * [44] 通配符匹配
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    p = p.replace(/(\*)+/g, '*')
    let sIndex = 0, pIndex = 0, sStart = -1, pStart = -1, sLen = s.length, pLen = p.length
    while(sIndex < sLen) {
        if (pIndex < pLen && (s[sIndex] == p[pIndex] || p[pIndex] == '?')) {
            sIndex++
            pIndex++
        } else if (pIndex < pLen && p[pIndex] == '*') {
            sStart = sIndex
            pStart = pIndex
            pIndex++
        } else if (sStart >= 0) {
            sIndex = ++sStart
            pIndex = pStart + 1
        } else {
            return false
        }
    }
    while (pIndex < pLen && p[pIndex] == '*') pIndex++
    return pIndex == pLen
};
// @lc code=end

