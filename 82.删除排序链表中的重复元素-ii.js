/*
 * @lc app=leetcode.cn id=82 lang=javascript
 *
 * [82] 删除排序链表中的重复元素 II
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
    }, res, flag = false
    res = prev

    while(index && index.next) {
        if (index.val == index.next.val) {
            prev.next = index.next.next
            index = index.next
            flag = true
        } else {
            index = index.next
            if (!flag) {
                prev = prev.next
            } else {
                flag = false
            }
        }
    }
    return res.next

};
// @lc code=end

