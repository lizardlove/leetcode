/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {

    let max = 0
    for (let i = 0; i < height.length; i++) {
        for (let j = i+1; j < height.length; j++) {
            let water = (j-i)*(height[i] > height[j] ? height[j] : height[i])
            max = max > water ? max : water
        }
    }
    return max
};
// @lc code=end

