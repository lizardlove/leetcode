/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    let row = board.length, col = board[0].length
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (board[i][j] == word[0]) {
                console.log(i, j)
                if (backTrack(board, i, j, word, 0)) {
                    return true
                }
            }
        }
    }
    return false

};
function backTrack(board, i, j, word, wIndex) {
    console.log(i, j, wIndex)
    let row = board.length, col = board[0].length, ch
    if (wIndex == word.length) return true
    if (i == row || i == -1) return false
    if (j == col || j == -1) return false

    if (board[i][j] == word[wIndex]) {
        ch = board[i][j]
        board[i][j] = -1
        if (backTrack(board, i, j + 1, word, wIndex + 1)) {
            return true
        } else if (backTrack(board, i, j - 1, word, wIndex + 1)) {
            return true
        } else if (backTrack(board, i + 1, j, word, wIndex + 1)) {
            return true
        } else if (backTrack(board, i - 1, j, word, wIndex + 1)) {
            return true
        }
        board[i][j] = ch
        return false
    } else {
        false
    }
}
// let board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], x = "SEE"
// console.log(exist(board, x))
// @lc code=end

