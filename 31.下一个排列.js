/*
 * @lc app=leetcode.cn id=31 lang=javascript
 *
 * [31] 下一个排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    if (!nums.length) return 
    let leftIndex = -1, rightIndex, minBig
    for (let j = nums.length - 1; j > 0; j--) {
        if (nums[j-1] < nums[j] ) {
            leftIndex = j - 1
            break
        }
    }
    if (leftIndex == -1) {
        nums = nums.sort((a,b) => a-b)
    } else {
        minBig = nums[leftIndex + 1]
        for (let i = leftIndex + 1; i< nums.length; i++) {
            if (nums[i] > nums[leftIndex] && nums[i] <= minBig) {
                minBig = nums[i]
                rightIndex = i
            }
        }
    
        swap(nums, leftIndex, rightIndex)

        let len = nums.length, j = leftIndex + 1
        while(len > j) {
            swap(nums, j, len - 1)
            len--
            j++
        }
    }


};
function swap(nums, i, j) {
    let temp = nums[j]
    nums[j] = nums[i]
    nums[i] = temp
}
// @lc code=end

