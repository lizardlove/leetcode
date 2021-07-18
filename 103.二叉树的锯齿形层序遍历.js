/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层序遍历
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
var zigzagLevelOrder = function(root) {
    let levelResult = levelOrder(root), flag = false
    for (let i = 0; i < levelResult.length; i++) {
        if (flag) {
            levelResult[i] = levelResult[i].reverse()
        }
        flag = !flag
    }
    return levelResult
};

var levelOrder = function(root) {
    let stack = [], index = root, height = 0, res = [], heightStack = []
    while(index || stack.length) {
        if (index == null) {
            index = stack.pop()
            height = heightStack.pop()
            index = index.right
            height++
            continue
        }
        if(index.left) {
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
    return res
};
// @lc code=end

