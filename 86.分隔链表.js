/*
 * @lc app=leetcode.cn id=86 lang=javascript
 *
 * [86] 分隔链表
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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    let prev = {
        next: head
    }
    let big = prev, small = prev, temp
    while(big.next && big.next.val < x) {
        big = big.next
    }
    if (big.next == null) return prev.next
    small = big
    while(small && small.next != null) {
        if (small.next.val < x) {
            temp = small.next
            small.next = temp.next
            temp.next = big.next
            big.next = temp
            big = big.next
        } else {
            small = small.next
        }
    }
    return prev.next
};
// @lc code=end

