/*
 * @lc app=leetcode.cn id=1 lang=c
 *
 * [1] 两数之和
 */

// @lc code=start


/**
 * Note: The returned array must be malloced, assume caller calls free().
 */

int* twoSum(int* nums, int numsSize, int target, int* returnSize){
    int i = 0, j = 0;
    static int count[2] = {0};
    for (i = 0; i < numsSize-1; i++) {
        for (j = i+1; j < numsSize; j++) {
            if (nums[i]+nums[j] == target) {
                count[0] = i;
                count[1] = j;
                *(returnSize) = 2;
                return count;
            }
        }
    }
    return 0;
}


// @lc code=end

