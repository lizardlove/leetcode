/*
 * @lc app=leetcode.cn id=124 lang=javascript
 *
 * [124] 二叉树中的最大路径和
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
    let max = -999999
    function maxTreePath(root) {
        if (root === null) return 0
        let left, right, localMax
        left = Math.max(maxTreePath(root.left, root.val), 0)
        right = Math.max(maxTreePath(root.right, root.val), 0)
        localMax = root.val + left + right
        max = Math.max(localMax, max)
        return root.val + Math.max(left, right)
    }
    maxTreePath(root)
    return max
};
// @lc code=end

