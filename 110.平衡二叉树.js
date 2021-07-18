/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
 * @return {boolean}
 */
var isBalanced = function(root) {
    let [res] = isTreeBalanced(root)
    return res
};
function isTreeBalanced(root) {
    if (root === null) return [true, 0]
    let leftBalanced, leftHeight, rightBalanced, rightHeight
    if (root.left) {
        [leftBalanced, leftHeight] = isTreeBalanced(root.left)
    } else {
        leftBalanced = true
        leftHeight = 0
    }
    if (root.right) {
        [rightBalanced, rightHeight] = isTreeBalanced(root.right)
    } else {
        rightBalanced = true
        rightHeight = 0
    }
    if (leftBalanced && rightBalanced) {
        let treeHeight = leftHeight > rightHeight ? leftHeight : rightHeight
        treeHeight++
        return [Math.abs(leftHeight - rightHeight) <= 1, treeHeight]
    } else {
        return [false, 0]
    }
}
// @lc code=end

