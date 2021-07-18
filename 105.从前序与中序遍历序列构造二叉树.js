/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if (preorder.length === 0) return null
    if (preorder.length === 1 && inorder.length === 1) return {val: preorder[0], left: null, right: null}
    let rootIndex, leftTree, rightTree
    rootIndex = inorder.indexOf(preorder[0])
    leftTree = buildTree(preorder.slice(1, rootIndex+1), inorder.slice(0, rootIndex))
    rightTree = buildTree(preorder.slice(rootIndex+1), inorder.slice(rootIndex+1))
    return {
        val: inorder[rootIndex],
        left: leftTree,
        right: rightTree
    }
};
// @lc code=end

