/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
 * @return {boolean}
 */
var isValidBST = function(root) {
    if (!root) return true
    let stack = [], index = root, max = []
    while(index != null || stack.length) {
        if (index == null) {
            index = stack.pop()
            max.push(index.val)
            if (max.length > 1) {
                if (max[max.length - 2] >= max[max.length - 1]) {
                    return false
                }
            }
            index = index.right
            continue
        }
        if (index.left != null) {
            stack.push(index)
            index = index.left
        } else {
            max.push(index.val)
            if (max.length > 1) {
                if (max[max.length - 2] >= max[max.length - 1]) {
                    return false
                }
            }
            index = index.right
        }
    }
    return true
};
// @lc code=end

