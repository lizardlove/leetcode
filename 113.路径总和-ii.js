/*
 * @lc app=leetcode.cn id=113 lang=javascript
 *
 * [113] 路径总和 II
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
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
    let stack = [], index = root, currentSum= 0, sumStack = [], pathStack = [], res = [], path = []
    while(index || stack.length) {
        if (index === null) {
            index = stack.pop()
            path = pathStack.pop()
            currentSum = sumStack.pop()
            index = index.right
            continue
        }
        currentSum += index.val
        path.push(index.val)
        if (index.left != null) {
            stack.push(index)
            sumStack.push(currentSum)
            pathStack.push(path.slice(0))
            index = index.left
        } else {
            if (index.right === null && currentSum === sum) {
                res.push(path)
            }
            index = index.right
        }
    }
    return res
};
// @lc code=end

