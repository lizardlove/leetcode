/*
 * @lc app=leetcode.cn id=81 lang=javascript
 *
 * [81] 搜索旋转排序数组 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    let len = nums.length, left = 0, right, middle
    right = len - 1
    middle = parseInt((left + right) / 2)
    if (len == 1) return nums[0] == target
    while(left < right) {
        if (nums[middle] == target || nums[left] == target || nums[right] == target) return true
        if (nums[middle] == nums[left] || nums[middle] == nums[right]) {
            if (nums[middle] == nums[left]) left++
            if (nums[middle] == nums[right]) right--
            continue
        }
        if (nums[middle] > target) {
            if (nums[left] < nums[middle]) {
                if (nums[left] > target) {
                    left = middle + 1
                } else {
                    right = middle - 1
                }
            } else {
                right = middle - 1
            }
        } else {
            if (nums[right] >= nums[middle]) {
                if (nums[right] < target) {
                    right = middle - 1
                } else {
                    left = middle + 1
                }
            } else {
                left = middle + 1
            }
        }
        middle = parseInt((left + right) / 2)
    }
    return false
    
};
// @lc code=end

