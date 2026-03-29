class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        if (nums.length === 0) return []
        const res = []
        let postFix = 1
        let preFix = 1
        let p1 = 0
        let p2 = nums.length - 1
        while (p1 < nums.length) {
            res.push(preFix)
            preFix = preFix * nums[p1]
            p1++ 
        }
        while (p2 >= 0) {
            res[p2] = postFix * res[p2]
            postFix = postFix * nums[p2]
            p2--
        }
        return res
    }  
}
