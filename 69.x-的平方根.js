/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x == 1) return 1
    let item = x
    do{
        item = parseInt(item / 2)
        console.log(item)
    } while(item*item > x)
    
    while(item*item < x) {
        item++
    }
    if (item*item == x) return item
    else return item-1
};
// @lc code=end

