/*
 * @lc app=leetcode.cn id=37 lang=javascript
 *
 * [37] 解数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    let lineHashMap, columnHashMap, blockHashMap
    let lineCheck, columnCheck, blockCheck, blockX, blockY, valueX, valueY
    lineHashMap = columnHashMap = blockHashMap = Array.from({length:10}, x=>Array.from({length:10}, y=>0))
    for (let i = 0; i < 9; i++) {
        blockX = parseInt(i / 3)
        blockY = parseInt(i % 3)
        for (let j = 0; j < 9; j++) {
            lineCheck = board[i][j]
            lineHashMap[parseInt(lineCheck)] = 1

            columnCheck = board[j][i]
            columnHashMap[parseInt(columnCheck)] = 1

            valueX = parseInt(j / 3)
            valueY = parseInt(j % 3)
            blockCheck = board[blockX*3+valueX][blockY*3+valueY]
            blockHashMap[parseInt(blockCheck)] = 1
        }
    }

    
};
// @lc code=end

