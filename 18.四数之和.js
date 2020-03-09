/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    for (let i = 0; i < nums.length-1; i++) {
        for (let j = i+1; j < nums.length; j++) {
            if (nums[j] < nums[i]) {
                let temp = nums[j]
                nums[j] = nums[i]
                nums[i] = temp
            }
        }
    }
    let res = []
    for (let i = 0; i < nums.length; i++) {
        console.log(nums[i], target)
        //if (nums[i] > target) return res
        if (i > 0 && nums[i] == nums[i-1]) continue
        for (let j = i + 1; j < nums.length; j++) {
            //if (nums[i] + nums[j] > target) return res
            if (j > i+1 && nums[j] == nums[j-1]) continue
            let L = j + 1, R = nums.length - 1
            while(L < R) {
                let currentTarget = nums[i] + nums[j] + nums[L] + nums[R]
                if (currentTarget < target) {
                    L++
                } else if (currentTarget == target) {
                    res.push([nums[i], nums[j], nums[L], nums[R]])
                    while(L < R && nums[L] == nums[L+1]) L++
                    while(L < R && nums[R] == nums[R-1]) R--
                    L++
                    R--
                } else {
                    R--
                }
            }
        }
    }
    
    return res
};
// @lc code=end

