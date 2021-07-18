/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
var isSymmetric = function(root) {
    if (!root) return true
    if (!root.left && !root.right) return true
    if (Boolean(root.left) ^ Boolean(root.right)) return false
    let leftIndex = root.left, rightIndex = root.right
    let leftStack = [], rightStack = []
    while((leftIndex || leftStack.length) && (rightIndex || rightStack.length)) {
        if (Boolean(leftIndex) ^ Boolean(rightIndex)) return false
        if (leftIndex == null && rightIndex == null) {
            leftIndex = leftStack.pop()
            rightIndex = rightStack.pop()
            if (leftIndex.val != rightIndex.val) return false
            leftIndex = leftIndex.right
            rightIndex = rightIndex.left
            continue
        }
        if (Boolean(leftIndex.left) ^ Boolean(rightIndex.right)) return false
        if (leftIndex.left && rightIndex.right) {
            leftStack.push(leftIndex)
            rightStack.push(rightIndex)
            leftIndex = leftIndex.left
            rightIndex = rightIndex.right
        } else {
            if(leftIndex.val != rightIndex.val) return false
            leftIndex = leftIndex.right
            rightIndex = rightIndex.left
        }
    }
    if (Boolean(leftIndex) ^ Boolean(rightIndex)) return false
    return true
};
// @lc code=end

