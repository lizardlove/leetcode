/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第N个节点
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let x = {
        val: null,
        next: head
    }, y = x, res = x
    for (let i = 0; i < n; i++) {
        y = y.next
    }
    while(y.next) {
        x = x.next
        y = y.next
    }
    let temp = x.next.next
    x.next = temp
    return res.next
    
    
};
// @lc code=end

