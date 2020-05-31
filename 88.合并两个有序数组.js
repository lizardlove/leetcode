/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    if (m == 0) {
        for (let i = 0; i < n; i++) {
            nums1[i] = nums2[i]
        }
    }
    if (n != 0) {
        let n1Index = m - 1, n2Index = n - 1, key = m+n-1
        while(n1Index >= 0 && n2Index >= 0) {
            if (nums1[n1Index]  ==  nums2[n2Index]) {
                nums1[key--] = nums1[n1Index--]
                nums1[key--] = nums2[n2Index--]
            } else if (nums1[n1Index] < nums2[n2Index]) {
                nums1[key--] = nums2[n2Index--]
            } else {
                nums1[key--] = nums1[n1Index--]
                
            }
        }
        while(n1Index >= 0) {
            nums1[key--] = nums1[n1Index--]
        }
        while(n2Index >= 0) {
            nums1[key--] = nums2[n2Index--]
        }
    }

};
// @lc code=end

