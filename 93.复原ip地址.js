/*
 * @lc app=leetcode.cn id=93 lang=javascript
 *
 * [93] 复原IP地址
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    if (s.length < 4 || s.length > 12) return []
    let res = [], temp
    res = backTrack(s, 0, 4)
    for (let i = 0; i < res.length; i++) {
        res[i].shift()
        temp = res[i].toString().replace(/\,/g,'.')
        res[i] = temp
    }
    return res
    
};
function backTrack(s, index, dots) {
    if (s.length > index + dots*3 || s.length < index + dots) return false
    let head = parseInt(s.slice(0, index))
    let res = [], temp
    if (dots == 1) {
        temp = parseInt(s.slice(index))
        if (temp > 255 ) return false
        if (temp.toString().length != s.slice(index).length) return false
        else {
            res.push(head)
            res.push(temp)
            return [res]
        }
    }
    for (let i = 1; i < 4; i++) {
        let xdot = parseInt(s.slice(index, index + i))
        if (xdot > 255) continue
        temp = backTrack(s.slice(index), i, dots-1)
        if (temp) {
            temp.forEach(x => {
                x.unshift(head)
                res.push(x)
            })
        }
        if (s[index] == '0') break
    }
    return res
}
// @lc code=end

