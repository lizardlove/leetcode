/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let res = [], mapSet = [], s, hashFlag = false
    for (let i = 0; i < strs.length; i++) {
        s = Array.from(strs[i]).sort((a,b) => a.charCodeAt() - b.charCodeAt()).toString().replace(/\,/g, '')
        hashFlag = false
        for (let k = 0; k < mapSet.length; k++) {
            if (mapSet[k] == s) {
                hashFlag = true
                res[k].push(strs[i])
            }
        }
        if (!hashFlag) {
            mapSet.push(s)
            res.push([strs[i]])

        }
    }
    console.log(mapSet)
    return res
};
// @lc code=end

