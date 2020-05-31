/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let stack = [], index = root, res = []
    while(index != null || stack.length > 0) {
        if (index == null) {
            index = stack.pop()
            res.push(index.val)
            index = index.right
            continue
        }
        if (index.left != null) {
            stack.push(index)
            index = index.left
        } else {
            res.push(index.val)
            index = index.right
        }
    }
    return res
};
// @lc code=end

