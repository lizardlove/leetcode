/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    if (nums.length === 0) return null
    if (nums.length === 1) return {val: nums[0], left: null, right: null}
    let rootIndex = parseInt(nums.length / 2)
    let leftTree, rightTree
    leftTree = sortedArrayToBST(nums.slice(0, rootIndex))
    rightTree = sortedArrayToBST(nums.slice(rootIndex+1))
    return {
        val:nums[rootIndex],
        left: leftTree,
        right: rightTree
    }
};
// @lc code=end

