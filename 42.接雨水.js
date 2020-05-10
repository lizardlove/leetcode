/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let stack = [], capacity = 0, leftWall, bottom
    for (let i = 0; i < height.length; i++) {
        if (height[i] > 0) {
            if (!stack.length) {
                stack.push(i)
            } else {
                if (height[i] >= height[stack[stack.length-1]]) {
                    bottom = 0
                    do {
                        leftWall = stack.pop()
                        if (height[i] >= height[leftWall]) {
                            capacity += (i - leftWall - 1)*(height[leftWall] - bottom)
                            bottom = height[leftWall]
                        } else {
                            capacity += (i - leftWall - 1)*(height[i] - bottom)
                            bottom = height[i]
                            stack.push(leftWall)
                            break
                        }
                    } while(stack.length)
                    stack.push(i)
                } else {
                    leftWall = stack.pop()
                    capacity += (i - leftWall - 1) * (height[i] - 0)
                    stack.push(leftWall)
                    stack.push(i)
                }
            }
        }
        console.log(stack, i, capacity)
    }
    return capacity
};
// @lc code=end

