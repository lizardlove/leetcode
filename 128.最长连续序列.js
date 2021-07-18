/*
 * @lc app=leetcode.cn id=128 lang=javascript
 *
 * [128] 最长连续序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if (nums.length === 0) return 0
    nums = new Set(nums)
    let res = 0
    for (const num of nums) {
        if (!nums.has(num-1)) {
            let currNum = num
            let currLen = 1
            while(nums.has(currNum+1)) {
                currLen++
                currNum++
            }
            res = res > currLen ? res : currLen
        }
    }
    return res
};
// @lc code=end

