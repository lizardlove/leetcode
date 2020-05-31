/*
 * @lc app=leetcode.cn id=80 lang=javascript
 *
 * [80] 删除排序数组中的重复项 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let count = 0, jump = 0, key = -1, res = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != key) {
            key = nums[i]
            count = 1
            res++
        } else {
            if (count == 2) {
                jump++
            } else {
                count++
                res++
            }
        }
        nums[i-jump] = nums[i]
    }
    return res
};
// @lc code=end

