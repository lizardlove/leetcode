/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    a = Array.from(a)
    b = Array.from(b)
    let aIndex = a.length - 1, bIndex = b.length - 1, up = false
    while(aIndex != -1 && bIndex != -1) {
        if (up) {
            if (a[aIndex] == '0' && b[bIndex] == '0') {
                a[aIndex] = '1'
                b[bIndex] = '1'
                up = false
            } else if ((a[aIndex] == '1' && b[bIndex] == '0') || (a[aIndex] == '0' && b[bIndex] == '1')) {
                up = true
                a[aIndex] = '0'
                b[bIndex] = '0'
            } else {
                up = true
                a[aIndex] = '1'
                b[bIndex] = '1'
            }
        } else {
            if (a[aIndex] == '1' && b[bIndex] == '1') {
                up = true
                a[aIndex] = '0'
                b[bIndex] = '0'
            } else if ((a[aIndex] == '1' && b[bIndex] == '0') || (a[aIndex] == '0' && b[bIndex] == '1')) {
                up = false
                a[aIndex] = '1'
                b[bIndex] = '1'
            } else {
                up = false
                a[aIndex] = '0'
                b[bIndex] = '0'
            }
        }
        aIndex--
        bIndex--
    }
    console.log(a,b,up)
    while(aIndex!=-1) {
        if (up && a[aIndex] == '1') {
            a[aIndex] = '0'
            up = true
        } else if (!up && a[aIndex] == '0') {
            up = false
            a[aIndex] = '0'
        } else {
            up = false
            a[aIndex] = '1'
        }
        aIndex--
    }
    while(bIndex!=-1) {
        if (up && b[bIndex] == '1') {
            b[bIndex] = '0'
            up = true
        } else if ( !up && b[bIndex] == '0') {
            up = false
            b[bIndex] = '0'
        } else {
            up = false
            b[bIndex] = '1'
        }
        bIndex--
    }
    if (up) {
        a = '1' + a
        b = '1' + b
    }
    return (a.length >= b.length ? a : b).toString().replace(/(\,)+/g, '')

};
// @lc code=end

