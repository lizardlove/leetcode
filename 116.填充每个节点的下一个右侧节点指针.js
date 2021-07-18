/*
 * @lc app=leetcode.cn id=116 lang=javascript
 *
 * [116] 填充每个节点的下一个右侧节点指针
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    connectTree(root)
    return root
};
function connectTree(root) {
    if (root === null || root.left === null) return
    if (root.left.left === null) {
        root.next = null
        root.left.next = root.right
        root.right.next = null
        return 
    }
    root.next = null
    let leftTree = root.left, rightTree = root.right
    connectTree(root.left)
    connectTree(root.right)
    while(leftTree && rightTree) {
        leftTree.next = rightTree
        leftTree = leftTree.right
        rightTree = rightTree.left
    }
}
// @lc code=end

