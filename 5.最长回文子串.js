/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if(s.length < 1 || s == null) return ""
    let start = 0, end = 0
    for (let i = 0; i < s.length; i++) {
        let l1 = expandCenter(s, i, i)
        let l2 = expandCenter(s, i, i + 1)
        let max = Math.max(l1, l2)
        if(max > end - start) {
            start = i - parseInt((max - 1) / 2)
            end = i + parseInt(max / 2)
        }

    }
    return s.substring(start, end+1)
    
};

function expandCenter(s, L, R) {
    while(L >= 0 && R < s.length && s[L] == s[R]) {
        L--;
        R++;
    }
    return R - L -1;
}
// @lc code=end

