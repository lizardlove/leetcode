/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
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
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    if (root === null) return false
    let stack = [], index = root, currentSum = 0, sumStack = [], res = false
    while(index || stack.length) {
        if (index === null) {
            index = stack.pop()
            currentSum = sumStack.pop()
            index = index.right
            continue
        }
        currentSum += index.val
        if (index.left) {
            stack.push(index)
            sumStack.push(currentSum)
            index = index.left
        } else {
            if (index.right === null) {
                if (currentSum === sum) {
                    res = true
                }
            }
            index = index.right
        }
    }
    return res
};
// @lc code=end

