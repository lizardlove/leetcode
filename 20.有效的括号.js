/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let box = [], flag = true
    if (s.length == 1) return false
    for (let i = 0; i < s.length; i++) {
        let word = s[i]
        if (word == "(" || word == "{" || word == "[") {
            box.push(word)
        } else {
            switch(box.pop()) {
                case "(": {
                    if (word != ")") {
                        flag = false
                    }
                    break
                }
                case "{": {
                    if (word != "}") {
                        flag = false
                    }
                    break
                }
                case "[": {
                    if (word != "]") {
                        flag = false
                    }
                    break
                }
                default: {
                    flag = false
                    break
                }
            }
            if (!flag) {
                break
            }
        }
    }
    if (box.length) {
        flag = false
    }
    return flag
};
// @lc code=end

