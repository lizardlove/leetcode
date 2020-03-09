/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
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
var reverseKGroup = function(head, k) {
    let count = k, tempHead = head, yard = head, flag = true, res, tempRes
    res = {
        val: null,
        next: null
    }
    tempRes = res
    while(count && tempHead) {
        count--
        tempHead = tempHead.next
    }
    console.log(count, tempHead)
    if (count == 0) {
        flag = true
    } else {
        return head
    }
    while(flag) {
        tempRes.next = reverseK(yard,k)
        while(tempRes && tempRes.next) tempRes = tempRes.next
        count = k
        yard = tempHead
        while(count && tempHead) {
            count--
            tempHead = tempHead.next
        }
        if (count == 0) {
            flag = true
        } else {
            flag = false
            tempRes.next = yard
        }
    }

    return res.next
};
function reverseK(head, k) {
    let x = {
        val: head.val,
        next: null
    }, temp
    head = head.next
    while(--k) {
        temp = x
        x = {
            val: head.val,
            next: temp
        }
        head = head.next
    }
    return x
}
// @lc code=end

