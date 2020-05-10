/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    let result =  [], fragment
    candidates.sort( (a,b) => a-b)
    if (candidates[0] > target) return []
    for (let i = 0; i < candidates.length; i++) {
        if (i > 0 && candidates[i-1] == candidates[i]) continue
        if (candidates[i] < target) {
            fragment = combinationSum2(candidates.slice(i+1), target - candidates[i])
            fragment.forEach(item => {
                if (item.length) {
                    item.unshift(candidates[i])
                    result.push(item)
                }
            })
        } else if (candidates[i] == target) {
            result.push([candidates[i]])
            break
        }
    }
    if(!result.length) {
        return []
    } else {
        return result
    }
};
// @lc code=end

