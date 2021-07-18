/*
 * @lc app=leetcode.cn id=95 lang=javascript
 *
 * [95] 不同的二叉搜索树 II
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
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
    let res = [], temp
    for (let i = 1; i <= n; i++) {
        temp = getTree(1, n, i)
        for (let j = 0; j < temp.length; j++) {
            res.push(temp[j])
        }
    }
    return res
    
};
function getTree(m, n, head) {
    if (n == m && n == head) return [TreeNode(head)]
    let res = [], left = null, right = null
    if (m == head) {
        for (let i = head + 1; i <= n; i++) {
            right = getTree(head + 1, n, i)
            for (let k = 0; k < right.length; k++) {
                res.push(TreeNode(head, null, right[k]))
            }
        }
    } else if (n == head) {
        for (let i = m; i <= head - 1; i++) {
            left = getTree(m, head - 1, i)
            for (let k = 0; k< left.length; k++) {
                res.push(TreeNode(head, left[k], null))
            }
        }
    } else {
        for (let i = m; i < head; i++) {
            left = getTree(m, head - 1, i)
            for (let j = head + 1; j <= n; j++) {
                right = getTree(head + 1, n, j)
                for (let k = 0; k < left.length; k++) {
                    for (let l = 0; l < right.length; l++) {
                        res.push(TreeNode(head, left[k], right[l]))
                    }
                }
            }
        }
    }
    return res
}

function TreeNode(val, left, right) {
    return {
        val: (val===undefined ? 0 : val),
        left: (left===undefined ? null : left),
        right: (right===undefined ? null : right)
    }
}
// @lc code=end

