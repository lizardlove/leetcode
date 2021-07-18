/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层序遍历 II
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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    let stack = [], index = root, height = 0, heightStack = [], res = []
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
            if (res[height]) {
                res[height].push(index.val)
            } else {
                res.push([index.val])
            }
            index = index.left
            height++
        } else {
            if (res[height]) {
                res[height].push(index.val)
            } else {
                res.push([index.val])
            }
            index = index.right
            height++
        }
    }
    return res.reverse()
};
// @lc code=end

