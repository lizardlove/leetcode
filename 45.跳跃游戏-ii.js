/*
 * @lc app=leetcode.cn id=45 lang=javascript
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
   let current = 0, count = 0, goal = nums.length - 1, partialIndex, partialMax
   while(current < goal) {
       if (current + nums[current] >= goal) {
           count++
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
           count++
       }
   }
   return count
};
// @lc code=end

