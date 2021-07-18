/*
 * @lc app=leetcode.cn id=114 lang=javascript
 *
 * [114] 二叉树展开为链表
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    let stack = [], index = root, prev = root, temp
    while(index || stack.length) {
        if (index === null) {
            index = stack.pop()
            prev.right = index
            continue
        }
        if (index.left) {
            if (index.right) {
                stack.push(index.right)
            }
            if (index === root) {
                prev = root
            } else {
                prev.right = index
                prev = index
            }
            temp = index
            index = index.left
            temp.left = null

        } else {
            if (index === root) {
                prev = root
            } else {
                prev.right = index
                prev = index
            }
            index = index.right
        }
    }
};
// @lc code=end

