/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
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
    let res = 0
    let constant, min = 99999
    for (let i = 0; i < nums.length; i++) {
        // if (i > 0 && nums[i] == nums[i+1]) continue
        let L = i + 1, R = nums.length - 1
        while(L < R) {
            let currentTarget = nums[i] + nums[L] + nums[R]
            constant = Math.abs(currentTarget - target)
            if (constant < min) {
                res = currentTarget
                min = constant 
            }
            if (currentTarget < target) {
                L++
            } else if (currentTarget == target) {
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

