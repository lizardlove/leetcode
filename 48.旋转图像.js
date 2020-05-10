/*
 * @lc app=leetcode.cn id=48 lang=javascript
 *
 * [48] 旋转图像
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
     let onion, t1, t2, t3, t4, len = matrix.length
     onion = parseInt((matrix.length / 2)+0.5)
     for (let i = 0; i < onion; i++) {
         for(let j = i; j < len - i - 1; j++) {
             t1 = matrix[i][j]
             t2 = matrix[j][len - i - 1]
             t3 = matrix[len - i - 1][len - j - 1]
             t4 = matrix[len- j - 1][i]
             matrix[i][j] = t4
             matrix[j][len-i-1] = t1
             matrix[len-i-1][len-j-1] = t2
             matrix[len-j-1][i] = t3
         }
     }
};
// @lc code=end

