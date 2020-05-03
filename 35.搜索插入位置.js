/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    nums.splice(0,0, -99999)
    nums.push(99999)
    let left = 0, right = nums.length - 1, middle = parseInt(nums.length / 2)
    let mNum
    while(left <= right) {
        mNum = nums[middle]
        if (mNum == target) {
            return middle - 1 //middle
        } else if (mNum < target) {
            if (nums[middle + 1] > target) {
                return middle //middle + 1
            } else {
                left = middle + 1
            }
        } else if (mNum > target) {
            if (nums[middle - 1] < target) {
                return middle - 1 //middle
            } else {
                right = middle - 1
            }
        }
        middle = parseInt((left + right) / 2)
    }
};
// @lc code=end

