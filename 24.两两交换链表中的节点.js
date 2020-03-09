/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
var swapPairs = function(head) {
    let x = head
    let res = swap(head)
    head = res
    let y = res
    if (res && res.next) {
        head = head.next.next
        y = y.next
    } else {
        return res
    }
    while(head && head.next) {
        head = swap(head)
        y.next = head
        head = head.next.next
        y = y.next.next
    }
    return res
};
function swap(head) {
    if (!head || !head.next) return head
    if (head && head.next) {
        let x = head, y = head.next
        let temp = y
        x.next = y.next
        temp.next = x
        return temp
    } else {
        return head
    }
}
// @lc code=end

