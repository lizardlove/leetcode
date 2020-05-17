/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let res = nums[0], pre = 0
    for (let i = 0; i < nums.length; i++) {
        pre = (pre + nums[i]) > nums[i] ? (pre + nums[i]) : nums[i]
        res = res > pre ? res : pre
    }
    return res
};
// @lc code=end

