/*
 * @lc app=leetcode.cn id=41 lang=javascript
 *
 * [41] 缺失的第一个正数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    // if (!nums.length) return 1
    // let min = 1
    // nums.sort((a,b) => a-b)
    // for (let i = 0; i < nums.length; i++) {
    //     if (nums[i] == min) {
    //         min++
    //     }
    // }

    // return min
    return firstMissingPositive2(nums)

};
function firstMissingPositive2(nums) {
    let len = nums.length, flag = true
    for (let i = 0; i < len; i++) {
        if (nums[i] == 1) flag = false
    }
    if (flag) return 1

    for (let i = 0; i < len; i++) {
        if(nums[i] <= 0 || nums[i] > len) {
            nums[i] = 1
        }
    }
    for (let i = 0; i < len; i++) {
        let pos = nums[i] < 0 ? (-nums[i]) : nums[i]
        nums[pos-1] = nums[pos-1] > 0 ? (-nums[pos-1]) : nums[pos-1]
    }

    let result = len + 1
    for (let i = 0; i < len; i++) {
        if (nums[i] > 0) return i+1
    }
    return result
}
// @lc code=end

