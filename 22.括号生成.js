/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let res = getParenthesis(n, n)
    return res
};

function getParenthesis(l, r) {
    if (l > r) return []
    if (l == 0 && r == 1) return [")"]
    let res = [], l1 = [], r1 = []
    if (l) {
        l1 = getParenthesis(l-1, r)
    }
    if (r > 1) {
        r1 = getParenthesis(l, r-1)
    }
    l1.forEach(e => {
        res.push("(" + e)
    })
    r1.forEach(e => {
        res.push(")" + e)
    })
    return res

}
// @lc code=end

