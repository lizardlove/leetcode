/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let count = 0, len = nums.length
    for(let i = 0; i < nums.length; i++) {
        if (nums[i] == val) {
            count++
            len--
        }
        if (count && nums[i] != val) {
            nums[i-count] = nums[i]
        }
    }
    return len
};
// @lc code=end

