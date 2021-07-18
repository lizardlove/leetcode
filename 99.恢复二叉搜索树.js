/*
 * @lc app=leetcode.cn id=99 lang=javascript
 *
 * [99] 恢复二叉搜索树
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
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {
    let index = root
    let pre = null, predecessor = null, x = null, y = null
    while (index) {
        // 如果index存在左节点
        if (index.left) {
            // predecessor节点就是当前 index 节点向左走一步，然后一直向右走至无法走为止
            predecessor = index.left
            while (predecessor.right && predecessor.right !== index) {
                predecessor = predecessor.right
            }
            // 如果predecessor存在右节点，说明左子树已经遍历完了
            if (predecessor.right) {
                // 这一块与普通遍历一样 
                if (pre && pre.val > index.val) {
                    y = index
                    if (!x) {
                        x = pre
                    }
                }
                pre = index

                // 将右节点设为null，恢复树的形状
                predecessor.right = null
                // index的右节点如果存在的话，其实是存的之前的index，相当于普通方法里从栈里pop()出来的节点
                index = index.right
            } 
            // 如果predecessor不存在右节点，将其右节点设为index，index设为index的左节点
            else {
                // 将index存在predecessor的右节点里，相当于普通方法里将节点存到栈里
                predecessor.right = index
                index = index.left
            }
        }
        // 如果index不存在左节点，则index为正在遍历的节点。
        else {
            // 这一块与普通遍历一样
            if (pre && pre.val > index.val) {
                y = index
                if (!x) {
                    x = pre
                }
            }
            pre = index

            index = index.right
        }
    }
    // 交换x和y的值
    [x.val, y.val] = [y.val, x.val]
};
// @lc code=end

