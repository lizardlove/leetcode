/*
 * @lc app=leetcode.cn id=36 lang=javascript
 *
 * [36] 有效的数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let lineHashMap, columnHashMap, blockHashMap
    let lineCheck, columnCheck, blockCheck, blockX, blockY, valueX, valueY
    for (let i = 0; i < 9; i++) {
        lineHashMap = Array.from({length: 10}, x=>0)
        columnHashMap = Array.from({length: 10}, x=>0)
        blockHashMap = Array.from({length: 10}, x=>0)
        blockX = parseInt(i / 3)
        blockY = parseInt(i % 3)
        for (let j = 0; j < 9; j++) {
            lineCheck = board[i][j]
            if (lineCheck != ".") {
                if (lineHashMap[parseInt(lineCheck)]) {
                    return false
                } else {
                    lineHashMap[parseInt(lineCheck)] = 1
                }
            }

            columnCheck = board[j][i]
            if (columnCheck != ".") {
                if (columnHashMap[parseInt(columnCheck)]) {
                    return false
                } else {
                    columnHashMap[parseInt(columnCheck)] = 1
                }
            }

            valueX = parseInt(j / 3)
            valueY = parseInt(j % 3)
            blockCheck = board[blockX*3+valueX][blockY*3+valueY]
            if (blockCheck != ".") {
                if (blockHashMap[parseInt(blockCheck)]) {
                    return false
                } else {
                    blockHashMap[parseInt(blockCheck)] = 1
                }
            }

        }
    }

    return true
};
// @lc code=end

