/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if (k == 0 || !head) return head
    let len = 0, copyHead, iIndex = 0
    copyHead = head
    while(copyHead != null) {
        copyHead = copyHead.next
        len++
    }
    iIndex = k >= len ? k % len : k
    iIndex = iIndex != 0 ? len - iIndex : iIndex
    if (iIndex == 0) return head
    copyHead = head
    while(--iIndex) {
        copyHead = copyHead.next
    }
    let temp = copyHead.next
    copyHead.next = null
    copyHead = temp
    while(temp && temp.next) {
        temp = temp.next
    }
    temp.next = head
    return copyHead
    
};
// @lc code=end

