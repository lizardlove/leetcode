/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
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
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if (!head) return head
    if (!head.next) return head
    let index = head, prev = {
        next: head
    }, res
    res = prev

    while(index && index.next) {
        if (index.val == index.next.val) {
            prev.next = index.next
            index = index.next
        } else {
            prev = prev.next
            index = index.next
        }
    }
    return res.next
};
// @lc code=end

