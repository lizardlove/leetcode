/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals = intervals.sort((a,b) => a[1] - b[1])
    let cut = [], current, prev
    for (let i = intervals.length - 1; i > 0; i--) {
        current = intervals[i]
        prev = intervals[i-1]
        if (prev[1] >= current[0]) {
            if (prev[0] > current[1]) {
                let temp = intervals[i]
                intervals[i] = intervals[i-1]
                intervals[i-1] = temp
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

