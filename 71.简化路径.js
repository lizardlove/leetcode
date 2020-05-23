/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] 简化路径
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    path = path.split('/')
    let stack = []
    for (let i = 0; i < path.length; i++) {
        if (path[i] == "..") {
            if (stack.length) stack.pop()
        } else if (path[i] != "" && path[i] != ".") {
            stack.push(path[i])
        }
    }
    if (stack.length == 0) return "/"
    else {
        let ans = ""
        for (let i = 0; i < stack.length; i++) {
            ans += ("/" + stack[i])
        }
        return ans
    }
};
// @lc code=end

