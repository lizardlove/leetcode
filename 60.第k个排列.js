/*
 * @lc app=leetcode.cn id=60 lang=javascript
 *
 * [60] 第k个排列
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
    let group = [], charGroup = [], sortNum = 1, index = 0, res = "", goal = n
    for (let i = 1; i < n + 1; i++) {
        sortNum *= i
        group.push(sortNum)
        charGroup.push(i.toString())
    }
    while (index < goal - 1) {
        let x = parseInt((k -1)/group[n-2-index])
        k = k - group[n-2-index]*x
        index++
        res += charGroup[x]
        charGroup.splice(x,1)
    }
    res += charGroup[0]
    return res

};
// @lc code=end

