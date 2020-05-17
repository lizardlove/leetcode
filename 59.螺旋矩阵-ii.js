/*
 * @lc app=leetcode.cn id=59 lang=javascript
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    let union = parseInt(n / 2 + 0.5), matrix = Array.from({length: n}, x=>Array.from({length:n}, y=>0 )), count = 0
    for (let i = 0; i < union; i++) {
        if(i == n - i - 1) {
            matrix[i][i] = count + 1
        }
        for (let j = i; j < n - i - 1; j++) {
            matrix[i][j] = count + (j - i) + 1
            matrix[j][n - i - 1] = count + (n -2*i - 1) + (j - i)+1
            matrix[n - i - 1][n - j - 1] = count + 2*(n -2*i - 1) + (j - i)+1
            matrix[n - j - 1][i] = count + 3*(n - 2*i - 1) + (j - i)+1
        }
        count += (n-2*i - 1)*4
    }
    return matrix
};
// @lc code=end

