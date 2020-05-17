/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let current = 0, goal = nums.length - 1, partialIndex, partialMax
    while(current < goal) {
        if (nums[current] == 0) return false
        if (current + nums[current] >= goal) {
            break
        } else {
            partialIndex = 0
            partialMax = 0
            for (let i = 1; i <= nums[current]; i++) {
                if (partialMax < i + nums[current + i]) {
                    partialMax = i + nums[current + i]
                    partialIndex = i
                }
            }
            current += partialIndex
        }
   }
   return true
};
// @lc code=end

