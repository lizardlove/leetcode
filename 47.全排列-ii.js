/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    nums.sort((a,b) => a-b)
    return permute(nums)
};
function permute(nums) {
    console.log(nums)
    if (nums.length == 1) return [[nums[0]]]

    let res = [], current, value, len = nums.length, index
    for(let i = 0; i < len; i++) {
        value = nums[i]
        nums.splice(i,1)
        current = permute(nums)
        nums.splice(i,0,value)
        current.forEach(item => {
            item.unshift(value)
            res.push(item)
        })
        index = i
        while(nums[index] == nums[i]) i++
        i--
    }
    return res
}
// @lc code=end

