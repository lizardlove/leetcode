/*
 * @lc app=leetcode.cn id=90 lang=javascript
 *
 * [90] 子集 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    let res = [[]], temp
    nums.sort((a,b) => a-b)
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
        for (let i = 0; i < box.length; i++) {
            if (i > 0 && box[i] == box[i-1]) continue
            res.push([box[i]])
        }
        return res
    }
    for (let i = 0; i < box.length - (k - 1); i++) {
        if (i >0 && box[i] == box[i-1]) continue
        temp = getCombine(box.slice(i+1), k - 1)
        for (let j = 0; j < temp.length; j++) {
            temp[j].push(box[i])
            res.push(temp[j])
        }
    }
    return res
}
// @lc code=end

