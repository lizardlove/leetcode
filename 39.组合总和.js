/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let result =  [], fragment
    candidates.sort( (a,b) => a-b)
    if (candidates[0] > target) return []
    for (let i = 0; i < candidates.length; i++) {
        if (candidates[i] < target) {
            fragment = combinationSum(candidates.slice(i), target - candidates[i])
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

