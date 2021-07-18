/*
 * @lc app=leetcode.cn id=127 lang=javascript
 *
 * [127] 单词接龙
 */

// @lc code=start
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    const wordSet = new Set(wordList)
    wordSet.add(beginWord)
    if (!wordSet.has(endWord)) return 0

    let queue = [beginWord], level = 0, finished = false, res = 999999
    const visited = new Set()
    visited.add(beginWord)
    while(queue.length && !finished) {
        const levelSize = queue.length
        level++
        for (let i = 0; i < levelSize; i++) {
            const word = queue.shift()
            for (let j = 0; j < word.length; j++) {
                for (let c = 97; c <= 122; c++) {
                    const newWord = word.slice(0, j) + String.fromCharCode(c) + word.slice(j + 1);
                    if (!wordSet.has(newWord)) continue
                    if (visited.has(newWord)) continue
                    if (newWord === endWord) {
                        finished = true
                        res = res > level ? level : res
                    }
                    queue.push(newWord)
                    visited.add(newWord)
                }
            }
        }
    }
    if (!finished) return 0
    return res + 1
};
// @lc code=end

