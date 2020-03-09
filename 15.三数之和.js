/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    if (nums.length < 3) return []
    for(let i = 0; i < nums.length-1 ;i++) {
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
        if (nums[i] > 0) return res
        if (i > 0 && nums[i] == nums[i-1]) continue
        let L = i+1, R = nums.length-1
        while(L < R) {
            let currentTarget = nums[i] + nums[L] + nums[R]
            if (currentTarget < 0) {
                L++
            } else if (currentTarget == 0) {
                res.push([nums[i], nums[L], nums[R]])
                while(L < R && nums[L] == nums[L+1]) {
                    L++
                }
                while(L < R && nums[R] == nums[R-1]) {
                    R--
                }
                L++
                R--
            } else {
                R--
            }
        }
    }
    return res

};
// @lc code=end

