/*
 * @lc app=leetcode.cn id=109 lang=javascript
 *
 * [109] 有序链表转换二叉搜索树
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    let arr = []
    while(head) {
        arr.push(head.val)
        head = head.next
    }
    return sortedArrayToBST(arr)

};

function sortedArrayToBST(arr) {
    if (arr.length === 0) return null
    if (arr.length === 1) return {val: arr[0], left: null, right: null}
    let rootIndex = parseInt(arr.length/2), leftTree, rightTree
    leftTree = sortedArrayToBST(arr.slice(0, rootIndex))
    rightTree = sortedArrayToBST(arr.slice(rootIndex+1))
    return {
        val: arr[rootIndex],
        left: leftTree,
        right: rightTree
    }

}
// @lc code=end

