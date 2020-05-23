/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let zeroIndex = 0, oneIndex = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 2) {
            continue
        } else if (nums[i] == 1) {
            if (oneIndex < i) {
                swap(nums, oneIndex, i)
            }
            oneIndex++
        } else if (nums[i] == 0) {
            if (oneIndex < i) {
                swap(nums, oneIndex, i)
            }
            if (zeroIndex < oneIndex) {
                swap(nums, zeroIndex, oneIndex)
            }
            zeroIndex++
            oneIndex++
        }
    }
};

function swap(nums, i, j) {
    let temp = nums[i]
    nums[i] = nums[j]
    nums[j] = temp
}
// @lc code=end

