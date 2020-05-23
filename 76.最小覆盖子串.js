/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    if (s.length < t.length) return ''
    if (s == t) return s
    let left = 0, right = 0, needs = {}, window = {}, flag = 1, res = 999999, resLeft = 0, resRight = 0, resFlag = false
    for (let i = 0; i < t.length; i++) {
        if (needs[t[i]] > 0) {
            needs[t[i]]++
        } else {
            needs[t[i]] = 1
        }
        window[t[i]] = 0
    }
    console.log(needs)
    while(right < s.length) {
        if (window[s[right]] >= 0) {
            window[s[right]]++
            flag = true
            for (let key in needs) {
                if (window[key] < needs[key]) {
                    flag = false
                    break
                }
            }
            while(flag) {
                resFlag = true
                if (res > right - left) {
                    res = right - left
                    resLeft = left
                    resRight = right 
                }
                if (window[s[left]] >= 0) {
                    window[s[left]]--
                }
                left++
                flag = true
                for (let key in needs) {
                    if (window[key] < needs[key]) {
                        flag = false
                        break
                    }
                }
            }
        }
        right++
    }
    console.log(resLeft, resRight, flag)
    if (resFlag) {
        return s.substr(resLeft, resRight-resLeft+1)
    } else {
        return ''
    }

};
// @lc code=end

