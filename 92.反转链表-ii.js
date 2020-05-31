/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
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
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
    if (m == n) return head
    let index = {
        next: head
    }
    let len = n - m + 1, middle = 0, count = 1, temp, res = index
    let leftStart, leftEnd, rightStart, rightEnd
    while(count < m) {
        count++
        index = index.next
    }
    if (len % 2) {
        middle = (m + n) / 2
        leftStart = index
        index = index.next
        count++
        while(count < middle) {
            temp = leftStart.next
            leftStart.next = index.next
            index.next = leftStart.next.next
            leftStart.next.next = temp
            count++
        }
        leftEnd = index
        rightStart = index.next
        index = index.next.next
        count = count + 2
        while(count <= n) {
            temp = rightStart.next
            rightStart.next = index.next
            index.next = rightStart.next.next
            rightStart.next.next = temp
            count++
        }
        rightEnd = index

        temp = leftStart.next
        leftStart.next = rightStart.next
        rightStart.next = temp
        leftEnd.next = rightEnd.next
        rightEnd.next = rightStart


    } else {
        leftStart = index
        index = index.next
        count = len / 2 - 1
        while(count-- > 0) {
            temp = leftStart.next
            leftStart.next = index.next
            index.next = leftStart.next.next
            leftStart.next.next = temp
        }
        leftEnd = index
        rightStart = index
        index = index.next
        count = len / 2 - 1
        while(count-- > 0) {
            temp = rightStart.next
            rightStart.next = index.next
            index.next = rightStart.next.next
            rightStart.next.next = temp
        }
        rightEnd = index
        temp = leftStart.next
        leftStart.next = rightStart.next
        rightStart.next = rightEnd.next
        rightEnd.next = temp
    }

    return res.next

};
// @lc code=end

