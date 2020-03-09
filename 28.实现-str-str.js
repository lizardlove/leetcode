/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let judge = false, id = 0, j = 0
    if (needle.length == 0) return 0
    for (let i = 0; i < haystack.length; i++) {
        console.log(i)
        if (haystack[i] == needle[j]) {
            if (j == 0) id = i
            if (j == needle.length-1) {
                judge = true
                break
            }
            j++
            
        } else {
            if (j) i = id
            j = 0
        }
    }
    if (!judge) {
        return -1
    } else {
        return id
    }
};
// @lc code=end

