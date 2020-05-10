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
    let x = backTrack(board, 0, 0) 
    console.log(x)
};

function backTrack(board, i, j) {
    let row = 9, column = 9
    if (j == column) {
        return backTrack(board, i + 1, 0)
    }
    if (i == row) {
        return true
    }
    if (board[i][j] !== ".") {
        return backTrack(board, i, j + 1)
    }
    for (let ch = '1'; ch <= '9'; ch++) {
        if (!isValid(board, i, j, ch)) {
            continue
        }
        board[i][j] = ch.toString()
        if (backTrack(board, i, j + 1)) {
            return true
        }
        board[i][j] = "."
    }
    return false
}

function isValid(board, i, j, ch) {
    for (let x = 0; x < 9; x++) {
        if (board[i][x] == ch) {
            return false
        }
        if (board[x][j] == ch) {
            return false
        }
        if (board[parseInt(i / 3)*3 + parseInt(x / 3)][parseInt(j / 3) * 3 + parseInt(x % 3)] == ch) {
            return false
        }
    }
    return true
}
// let arr = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]
// console.log(solveSudoku(arr), arr)
// @lc code=end

