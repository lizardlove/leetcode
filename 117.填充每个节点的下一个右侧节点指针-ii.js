/*
 * @lc app=leetcode.cn id=117 lang=javascript
 *
 * [117] 填充每个节点的下一个右侧节点指针 II
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    // connectTree(root)
    // return root
    if (root === null) return null
    root.next = null
    let stack = [root], index, count = 1
    while(stack.length) { 
        let levelCount = count
        count = 0
        while(levelCount) {
            index = stack.shift()
            if (index.left) {
                stack.push(index.left)
                count++
            }
            if (index.right) {
                stack.push(index.right)
                count++
            }
            levelCount--
            if (levelCount) index.next = stack[0]
        }
    }
    return root
};
// function connectTree(root) {
//     if (root === null) return
//     root.next = null
//     connectTree(root.left)
//     connectTree(root.right)
//     let leftStack = [], rightStack = []
//     leftStack = getTreeLeft(root.left, false)
//     rightStack = getTreeLeft(root.right, true)
//     console.log(leftStack, rightStack)
//     let leftIndex = 0, rightIndex = 0
//     while(leftIndex < leftStack.length && rightIndex < rightStack.length) {
//         leftStack[leftIndex].next = rightStack[rightIndex]
//         leftIndex++
//         rightIndex++
//     }
    
// };
// function getTreeLeft(root, leftFlag) {
//     let stack = [], index = root, res = [], height = 0, heightStack = []
//     while(index || stack.length) {
//         if (index === null) {
//             index = stack.pop()
//             height = heightStack.pop()
//             index = index.right
//             height++
//             continue
//         }
//         if (index.left) {
//             stack.push(index)
//             heightStack.push(height)
//             if (res[height]) {
//                 res[height].push(index)
//             } else {
//                 res.push([index])
//             }
//             index = index.left
//             height++
//         } else {
//             if (res[height]) {
//                 res[height].push(index)
//             } else {
//                 res.push([index])
//             }
//             index = index.right
//             height++
//         }
//     }
//     if (leftFlag){
//         return res.map(item => item[0])
//     } else {
//         return res.map(item => item[item.length - 1])
//     }
// }
// @lc code=end

