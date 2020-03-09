/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let box = [
        "_",
        "!@#",
        "abc",
        "def",
        "ghi",
        "jkl",
        "mno",
        "pqrs",
        "tuv",
        "wxyz"
    ]
    if (digits.length == 0) return []
    let words = Array.from(box[parseInt(digits[0])])
    if (digits.length == 1) {
        return words
    }
    let recu = letterCombinations(digits.substring(1))
    let res = []
    words.forEach(e => {
        for (let i = 0; i < recu.length; i++) {
            res.push(e+recu[i])
        }
    })
    return res
};
// @lc code=end

