/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    if (nums.length == 1) {
        return [[nums[0]]]
    }
    let res = [], current, value, len = nums.length

    for (let i = 0; i < len; i++) {
        value = nums[i]
        nums.splice(i,1)
        current = permute(nums)
        nums.splice(i,0,value)
        current.forEach(item => {
            item.unshift(value)
            res.push(item)
        })
    }
    return res
};
// @lc code=end

