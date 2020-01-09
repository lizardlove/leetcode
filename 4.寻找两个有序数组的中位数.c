/*
 * @lc app=leetcode.cn id=4 lang=c
 *
 * [4] 寻找两个有序数组的中位数
 */

// @lc code=start

double findMedianSortedArrays(int* nums1, int nums1Size, int* nums2, int nums2Size){
    if (nums1Size > nums2Size) {
        return findMedianSortedArrays(nums2, nums2Size, nums1, nums1Size);
    }
    int c1, c2, lMax1, lMax2, rMin1, rMin2, lo, hi = 2*nums1Size;

    while(lo <= hi) {
        c1 = (lo+hi)/2;
        c2 = nums1Size + nums2Size - c1;

        lMax1 = (c1 == 0) ? INT_MIN : nums1[(c1 -1)/2];
        rMin1 = (c1 == 2*nums1Size) ? INT_MAX : nums1[(c1)/2];
        lMax2 = (c2 == 0) ? INT_MIN : nums2[(c2-1)/2];
        rMin2 = (c2 == 2*nums2Size) ? INT_MAX : nums2[(c2)/2];


        if(lMax1 > rMin2) {
            hi = c1 - 1;
        } else if (lMax2 > rMin1) {
            lo = c1 + 1;
        } else {
            break;
        }
    }
    int max = (lMax1 > lMax2) ? lMax1 : lMax2;
    int min = (rMin1 < rMin2) ? rMin1 : rMin2;
    return (max + min) / 2.0;

}


// @lc code=end

