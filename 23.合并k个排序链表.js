/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个排序链表
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    let x ={
        val: null,
        next: null
    }, res = x, flag = true
    lists = lists.filter(e => e)
    if (!lists) flag = false
    while(flag) {
        let min = 9999
        lists.forEach( list => {
            min = list.val < min ? list.val : min
        })
        for (let i = 0; i < lists.length; i++) {
            if (lists[i].val == min) {
                x.next = lists[i]
                x = x.next
                lists[i] = lists[i].next
            }
        }
        lists = lists.filter(e => e)
        if (!lists.length) {
            flag = false
        }
    }
    return res.next
};
// @lc code=end

