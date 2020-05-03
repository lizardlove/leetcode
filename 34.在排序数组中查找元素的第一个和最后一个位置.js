/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    nums.splice(0,0,-9999)
    nums.push(99999)
    let minIndex, maxIndex, minLeft, minRight, minMiddle, maxLeft, maxRight, maxMiddle
    let minMiddleNum, maxMiddleNum
    minIndex = maxIndex = -1
    minLeft = maxLeft = 0
    minRight = maxRight = nums.length - 1
    minMiddle = maxMiddle = parseInt(nums.length / 2)
    console.log(nums)
    while((minLeft < minRight && minIndex == -1) || (maxLeft < maxRight && maxIndex == -1)) {
        if (minIndex == -1) {
            minMiddleNum = nums[minMiddle]
            if (minMiddleNum < target) {
                if (nums[minMiddle + 1] == target) {
                    minIndex = minMiddle + 1
                } else {
                    minLeft = minMiddle + 1
                }
            } else if (minMiddleNum > target) {
                minRight = minMiddle - 1
            } else {
                if (nums[minMiddle-1] < target) {
                    minIndex = minMiddle
                } else {
                    minRight = minMiddle - 1
                }
            }
            minMiddle = parseInt((minLeft + minRight) / 2)
        }
        if (maxIndex == -1) {
            maxMiddleNum = nums[maxMiddle]
            if (maxMiddleNum < target) {
                maxLeft = maxMiddle + 1
            } else if (maxMiddleNum > target) {
                if (nums[maxMiddle - 1] == target) {
                    maxIndex = maxMiddle - 1
                } else {
                    maxRight = maxMiddle - 1
                }
            } else {
                if (nums[maxMiddle + 1] > target) {
                    maxIndex = maxMiddle
                } else {
                    maxLeft = maxMiddle + 1
                }
            }
            maxMiddle = parseInt((maxLeft + maxRight) / 2)
        }
    }

    return [minIndex == -1 ? minIndex : minIndex - 1, maxIndex == -1 ? maxIndex : maxIndex - 1]
};
// @lc code=end

