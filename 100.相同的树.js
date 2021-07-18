/*
 * @lc app=leetcode.cn id=100 lang=javascript
 *
 * [100] 相同的树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    let pStack = [], qStack = []
    let flag = true
   while (p != null || pStack.length) {
       if (p === null || q === null) {
           if (p === null && q===null) {
               p = pStack.pop()
               q = qStack.pop()
               continue
           } else {
               flag = false
               break
           }
       }
       console.log(p,q)
       if (p.val === q.val) {
           if (p.right || q.right) {
               pStack.push(p.right)
               qStack.push(q.right)
           }
            p = p.left
            q = q.left
       } else {
           flag = false
           break
       }

   }
   if (q!=null || qStack.length) {
       flag = false
   }
    return flag
    
};
// @lc code=end

