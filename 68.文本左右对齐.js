/*
 * @lc app=leetcode.cn id=68 lang=javascript
 *
 * [68] 文本左右对齐
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    let res = [[words[0]]], item, index = 0, len = words[0].length, space = 0, avg, avgLess
    for (let i = 1; i < words.length; i++) {
        item = words[i]
        if (len + res[index].length + item.length <= maxWidth) {
            len += item.length
            res[index].push(item)
        } else {
            index++
            res.push([item])
            len = item.length
        }
    }
    for (let i = 0; i < res.length - 1; i++) {
        avg = ''
        avgLess = ''
        // console.log(i)
        if (res[i].length > 1) {
            space = res[i].length - 1
            item = res[i]
            item = item.toString()
            len = maxWidth - item.length + space
            if (len % space) {
                index = parseInt(len / space) + 1
                while(index--) avg += ' '
                index = parseInt(len / space)
                while(index--) avgLess += ' '
                item = res[i][0]
                for (let j = 1, k = len % space; j < res[i].length;j++, k--) {
                    if (k > 0) {
                        item += (avg + res[i][j])
                    } else {
                        item += (avgLess + res[i][j])
                    }
                }
                // item = item.replace(/([^,]*),([^,]*)$/g, `$1${avgLess}$2`)
                // item = item.replace(/\,/g, avg)
            } else {
                index = len / space
                while(index--) avg += ' '
                item = res[i][0]
                for (let j = 1; j < res[i].length; j++) {
                    item += (avg + res[i][j])
                }
                // item = item.replace(/\,/g, avg)
            }
        } else {
            item = res[i].toString()
            index = maxWidth - item.length
            while(index--) avg += ' '
            item += avg
        }
        res[i] = item
    }
    item = res[res.length - 1][0]
    for (let i = 1; i < res[res.length-1].length; i++) {
        item += (' ' + res[res.length-1][i])
    }
    index = maxWidth - item.length
    avg = ''
    while(index--) avg += ' '
    item += avg
    res[res.length -1] = item
    // console.log(res)
    return res
};
// let x = ["Science","is","what","we","understand","well","enough","to","explain","to","a","computer.","Art","is","everything","else","we","do"]
// fullJustify(x, 20)
// @lc code=end
