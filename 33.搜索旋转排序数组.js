/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0, right = nums.length - 1, middle = parseInt(nums.length / 2), inLeft = false
    let lNum, rNum, mNum
    do {
        lNum = nums[left]
        rNum = nums[right]
        mNum = nums[middle]
        if (lNum == target) return left
        if (rNum == target) return right
        if (mNum == target) return middle
        if (mNum > target) {
            if (lNum > target && mNum > lNum) {
                inLeft = false
            } else {
                inLeft = true
            }
        } else {
            if (rNum < target && mNum < rNum) {
                inLeft = true
            } else {
                inLeft = false
            }
        }
        if (inLeft) {
            right = middle - 1
        } else {
            left = middle + 1
        }
        middle = parseInt((left + right) / 2)
    }while(left < right)
    return -1
};

// @lc code=end

