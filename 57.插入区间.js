/*
 * @lc app=leetcode.cn id=57 lang=javascript
 *
 * [57] 插入区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    if (!intervals.length) return [newInterval]
    let len = intervals.length
    intervals = intervals.sort((a, b) => a[1] - b[1])
    if (newInterval[1] >= intervals[len - 1][1]) {
        intervals.splice(len, 0, newInterval)
    } else {
        for (let i = 0; i < len; i++) {
            if (intervals[i][1] > newInterval[1]) {
                intervals.splice(i, 0, newInterval)
                break
            }
        }
    }
    len++
    let cut = [], current, prev
    for (let i = len - 1; i > 0; i--) {
        current = intervals[i]
        prev = intervals[i-1]
        if (prev[1] >=  current[0]) {
            if (prev[0] > current[1]) {
                let temp = intervals[i]
                intervals[i] = intervals[i - 1]
                intervals[i - 1] = temp
            } else {
                cut.push(i)
                intervals[i-1][0] = intervals[i][0] > intervals[i-1][0] ? intervals[i-1][0] : intervals[i][0]
                intervals[i-1][1] = intervals[i][1] > intervals[i-1][1] ? intervals[i][1] : intervals[i-1][1]
            }
        }
    }
    for (let i = 0; i < cut.length; i++) {
        intervals.splice(cut[i],1)
    }
    return intervals

};
// @lc code=end

