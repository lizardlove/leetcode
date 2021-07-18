/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
var maxDepth = function(root) {
    if (!root) return 0
    let stack = [], index = root, heightStack = [],height = 1
    let deep = 0
    while(index || stack.length) {
        if (index == null) {
            index = stack.pop()
            height = heightStack.pop()
            index = index.right
            height++
            deep = height > deep ? height : deep
            continue
        }
        if (index.left) {
            stack.push(index)
            heightStack.push(height)
            index = index.left
            height++
            deep = height > deep ? height : deep
        } else {
            index = index.right
            height++
            deep = height > deep ? height : deep
        }
    }
    return deep -1

};
// @lc code=end

