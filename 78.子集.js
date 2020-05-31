/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let res = [[]], temp
    for (let i = 1; i <= nums.length; i++) {
        temp = getCombine(nums, i)
        temp.forEach(x => res.push(x))
    }
    return res
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

