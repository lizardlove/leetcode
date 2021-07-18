/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
var minDepth = function(root) {
    if (root === null) return 0
    let stack = [], index = root, height = 0, heightStack = [], min = 99999
    while(index || stack.length) {
        if (index === null) {
            index = stack.pop()
            height = heightStack.pop()
            index = index.right
            height++
            continue
        }
        if (index.left) {
            stack.push(index)
            heightStack.push(height)
            index = index.left
            height++
        } else {
            if (index.right === null) {
                min = min < height ? min : height
            }
            index = index.right
            height++
        }
    }
    return min+1

};
// @lc code=end

