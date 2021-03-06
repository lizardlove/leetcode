/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let x = 1, box = Array.from({length: n}, y=>x++)
    return getCombine(box, k)
};
function getCombine(box, k) {
    if (box.length == k) return [box]
    let res = [], temp = []
    if (k == 1) {
        box.forEach(x => {
            res.push([x])
        })
        return res
    }
    for (let i = 0; i < box.length - (k - 1); i++) {
        temp = getCombine(box.slice(i+1), k - 1)
        for (let j = 0; j < temp.length; j++) {
            temp[j].push(box[i])
            res.push(temp[j])
        }
    }
    return res
}
// @lc code=end

