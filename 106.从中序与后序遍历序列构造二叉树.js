/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    if (inorder.length === 0) return null
    if (inorder.length === 1 && postorder.length === 1) return {val: inorder[0], left: null, right: null}
    let rootIndex, leftTree, rightTree
    rootIndex = inorder.indexOf(postorder[postorder.length-1])
    leftTree = buildTree(inorder.slice(0, rootIndex), postorder.slice(0, rootIndex))
    rightTree =  buildTree(inorder.slice(rootIndex+1), postorder.slice(rootIndex, postorder.length-1))
    return {
        val: inorder[rootIndex],
        left: leftTree,
        right: rightTree
    }

};
// @lc code=end

